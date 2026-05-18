import { execFile } from 'node:child_process';
import { promises as fs } from 'node:fs';
import * as path from 'node:path';
import { promisify } from 'node:util';

import { formatUnknownError, OUTPUT_ROOT, ROOT_DIR } from './shared';

const execFileAsync = promisify(execFile);
const EXTRACTED_OUTPUT_ROOT = path.join(
  ROOT_DIR,
  'docs',
  '_sources',
  'extracted',
  'official',
);
const MARKDOWN_OUTPUT_ROOT = path.join(
  ROOT_DIR,
  'docs',
  '_sources',
  'markdown',
  'official',
);
const CONVERSION_MANIFEST_PATH = path.join(
  ROOT_DIR,
  'docs',
  '_meta',
  'official-conversion-manifest.json',
);
const ARCHIVE_EXTENSIONS = new Set(['.zip']);
const MARKDOWN_SOURCE_EXTENSIONS = new Set(['.htm', '.html', '.pdf']);
const MARKITDOWN_TIMEOUT_MS = 120_000;

/** Describes one executable candidate for MarkItDown. */
interface MarkItDownCommand {
  args: string[];
  command: string;
}

/** Stores one successfully converted source artifact. */
export interface ConvertedDocument {
  markdownFilePath: string;
  size: number;
  sourceFilePath: string;
}

/** Stores one failed conversion for later review. */
export interface FailedConversion {
  error: string;
  sourceFilePath: string;
}

/** Persists the full conversion outcome for traceability. */
export interface ConversionManifest {
  converted: ConvertedDocument[];
  failed: FailedConversion[];
  generatedAt: string;
  outputRoot: string;
  sourceRoot: string;
}

/**
 * Converts archived official HTML and PDF files into Markdown.
 *
 * @returns Manifest with converted and failed files.
 * @throws {Error} When MarkItDown is unavailable.
 */
export async function runOfficialDocConversion(): Promise<ConversionManifest> {
  await fs.rm(EXTRACTED_OUTPUT_ROOT, { force: true, recursive: true });
  await fs.rm(MARKDOWN_OUTPUT_ROOT, { force: true, recursive: true });
  await fs.mkdir(EXTRACTED_OUTPUT_ROOT, { recursive: true });
  await fs.mkdir(MARKDOWN_OUTPUT_ROOT, { recursive: true });

  const archiveFiles = await listFilesByExtension(
    OUTPUT_ROOT,
    ARCHIVE_EXTENSIONS,
  );
  await extractArchiveFiles(archiveFiles);

  const sourceFiles = [
    ...(await listConvertibleFiles(OUTPUT_ROOT)),
    ...(await listConvertibleFiles(EXTRACTED_OUTPUT_ROOT)),
  ].sort((left, right) => left.localeCompare(right));
  const requiresMarkItDown = sourceFiles.some((sourceFilePath) =>
    MARKDOWN_SOURCE_EXTENSIONS.has(path.extname(sourceFilePath).toLowerCase()),
  );
  const markItDownCommand = requiresMarkItDown
    ? await resolveMarkItDownCommand()
    : undefined;
  const manifest = createConversionManifest();

  for (const sourceFilePath of sourceFiles) {
    try {
      const markdownFilePath = buildMarkdownOutputPath(sourceFilePath);
      await fs.mkdir(path.dirname(markdownFilePath), { recursive: true });
      await convertSourceFile(
        markItDownCommand,
        sourceFilePath,
        markdownFilePath,
      );
      const { size } = await fs.stat(markdownFilePath);

      if (size === 0) {
        await fs.unlink(markdownFilePath);
        throw new Error('MarkItDown produced an empty Markdown file.');
      }

      manifest.converted.push({
        markdownFilePath: path.relative(ROOT_DIR, markdownFilePath),
        size,
        sourceFilePath: path.relative(ROOT_DIR, sourceFilePath),
      });
    } catch (error: unknown) {
      manifest.failed.push({
        error: formatUnknownError(error),
        sourceFilePath: path.relative(ROOT_DIR, sourceFilePath),
      });
    }
  }

  await fs.mkdir(path.dirname(CONVERSION_MANIFEST_PATH), { recursive: true });
  await fs.writeFile(
    CONVERSION_MANIFEST_PATH,
    `${JSON.stringify(manifest, null, 2)}\n`,
    'utf8',
  );

  console.error(`Converted ${manifest.converted.length} files to Markdown.`);

  if (manifest.failed.length > 0) {
    console.error(`Failed to convert ${manifest.failed.length} files.`);
  }

  return manifest;
}

/**
 * Creates the initial conversion manifest.
 *
 * @returns Fresh manifest for one conversion run.
 */
function createConversionManifest(): ConversionManifest {
  return {
    converted: [],
    failed: [],
    generatedAt: new Date().toISOString(),
    outputRoot: path.relative(ROOT_DIR, MARKDOWN_OUTPUT_ROOT),
    sourceRoot: path.relative(ROOT_DIR, OUTPUT_ROOT),
  };
}

/**
 * Resolves the first available MarkItDown invocation.
 *
 * @returns Executable command and static arguments.
 * @throws {Error} When no supported invocation is available.
 */
async function resolveMarkItDownCommand(): Promise<MarkItDownCommand> {
  const commands = buildMarkItDownCandidates();

  for (const candidate of commands) {
    const isAvailable = await canExecute(candidate);

    if (isAvailable) {
      return candidate;
    }
  }

  throw new Error(
    'MarkItDown is unavailable. Install it with "python3 -m pip install --user "markitdown[pdf]"" and rerun the conversion.',
  );
}

/**
 * Builds the list of MarkItDown command candidates.
 *
 * @returns Candidate commands in priority order.
 */
function buildMarkItDownCandidates(): MarkItDownCommand[] {
  const environmentCommand = process.env['MARKITDOWN_BIN'];
  const configuredCandidate =
    typeof environmentCommand === 'string' &&
    environmentCommand.trim().length > 0
      ? [{ args: [], command: environmentCommand.trim() }]
      : [];
  const localVenvCandidate = buildLocalVenvCandidate();
  const venvCandidates = localVenvCandidate ? [localVenvCandidate] : [];

  return [
    ...configuredCandidate,
    ...venvCandidates,
    { args: [], command: 'markitdown' },
    { args: ['-m', 'markitdown'], command: 'python3' },
  ];
}

/**
 * Resolves the conventional repository-local virtualenv executable path.
 *
 * @returns Local MarkItDown candidate when the executable exists.
 */
function buildLocalVenvCandidate(): MarkItDownCommand | undefined {
  const executableName =
    process.platform === 'win32' ? 'markitdown.exe' : 'markitdown';
  const scriptsDirectory = process.platform === 'win32' ? 'Scripts' : 'bin';
  const executablePath = path.join(
    ROOT_DIR,
    '.venv',
    scriptsDirectory,
    executableName,
  );

  return { args: [], command: executablePath };
}

/**
 * Checks whether one MarkItDown candidate can be executed.
 *
 * @param candidate - Command candidate under validation.
 * @returns True when the command responds successfully.
 */
async function canExecute(candidate: MarkItDownCommand): Promise<boolean> {
  try {
    await execFileAsync(candidate.command, [...candidate.args, '--help'], {
      timeout: MARKITDOWN_TIMEOUT_MS,
    });
    return true;
  } catch {
    return false;
  }
}

/**
 * Recursively lists only HTML and PDF files under one directory.
 *
 * @param currentDirectory - Directory to scan.
 * @returns Sorted list of convertible file paths.
 */
async function listConvertibleFiles(
  currentDirectory: string,
): Promise<string[]> {
  return listFilesByExtension(currentDirectory, MARKDOWN_SOURCE_EXTENSIONS);
}

/**
 * Recursively lists files that match one of the provided extensions.
 *
 * @param currentDirectory - Directory to scan.
 * @param supportedExtensions - File extensions allowed in the result.
 * @returns Sorted file paths.
 */
async function listFilesByExtension(
  currentDirectory: string,
  supportedExtensions: Set<string>,
): Promise<string[]> {
  const directoryEntries = await fs.readdir(currentDirectory, {
    withFileTypes: true,
  });
  const nestedFiles: string[] = [];

  for (const directoryEntry of directoryEntries) {
    const absoluteEntryPath = path.join(currentDirectory, directoryEntry.name);

    if (directoryEntry.isDirectory()) {
      const childFiles = await listFilesByExtension(
        absoluteEntryPath,
        supportedExtensions,
      );
      nestedFiles.push(...childFiles);
    } else if (directoryEntry.isFile()) {
      const extension = path.extname(directoryEntry.name).toLowerCase();

      if (supportedExtensions.has(extension)) {
        nestedFiles.push(absoluteEntryPath);
      }
    }
  }

  return nestedFiles.sort((left, right) => left.localeCompare(right));
}

/**
 * Builds the Markdown output path for one archived artifact.
 *
 * @param sourceFilePath - Archived source file path.
 * @returns Mirrored Markdown output path.
 */
function buildMarkdownOutputPath(sourceFilePath: string): string {
  const relativeSourcePath = sourceFilePath.startsWith(EXTRACTED_OUTPUT_ROOT)
    ? path.join(
        'extracted',
        path.relative(EXTRACTED_OUTPUT_ROOT, sourceFilePath),
      )
    : path.relative(OUTPUT_ROOT, sourceFilePath);
  const extension = path.extname(relativeSourcePath);
  const outputRelativePath =
    relativeSourcePath.slice(0, -extension.length) + '.md';

  return path.join(MARKDOWN_OUTPUT_ROOT, outputRelativePath);
}

/**
 * Extracts downloaded ZIP archives into a stable mirror directory.
 *
 * @param archiveFilePaths - ZIP files to extract.
 */
async function extractArchiveFiles(archiveFilePaths: string[]): Promise<void> {
  for (const archiveFilePath of archiveFilePaths) {
    const extractionDirectory = buildExtractionDirectoryPath(archiveFilePath);

    await fs.rm(extractionDirectory, { force: true, recursive: true });
    await fs.mkdir(extractionDirectory, { recursive: true });
    await execFileAsync(
      'unzip',
      ['-o', '-qq', archiveFilePath, '-d', extractionDirectory],
      {
        timeout: MARKITDOWN_TIMEOUT_MS,
      },
    );
  }
}

/**
 * Builds the extraction directory for one ZIP file.
 *
 * @param archiveFilePath - ZIP file stored under the official archive root.
 * @returns Destination directory under the extracted root.
 */
function buildExtractionDirectoryPath(archiveFilePath: string): string {
  const relativeArchivePath = path.relative(OUTPUT_ROOT, archiveFilePath);
  const archiveExtension = path.extname(relativeArchivePath);
  const archiveStem = relativeArchivePath.slice(0, -archiveExtension.length);

  return path.join(EXTRACTED_OUTPUT_ROOT, archiveStem);
}

/**
 * Converts one source file to Markdown using MarkItDown.
 *
 * @param markItDownCommand - Resolved MarkItDown command when needed.
 * @param sourceFilePath - Source file to convert.
 * @param markdownFilePath - Target Markdown output file.
 */
async function convertSourceFile(
  markItDownCommand: MarkItDownCommand | undefined,
  sourceFilePath: string,
  markdownFilePath: string,
): Promise<void> {
  if (!markItDownCommand) {
    throw new Error(
      'MarkItDown is required for this file type but is unavailable.',
    );
  }

  await convertWithMarkItDown(
    markItDownCommand,
    sourceFilePath,
    markdownFilePath,
  );
}

/**
 * Converts one local source file into Markdown using MarkItDown.
 *
 * @param candidate - Resolved MarkItDown command.
 * @param sourceFilePath - Local HTML or PDF file.
 * @param markdownFilePath - Target Markdown file.
 */
async function convertWithMarkItDown(
  candidate: MarkItDownCommand,
  sourceFilePath: string,
  markdownFilePath: string,
): Promise<void> {
  await execFileAsync(
    candidate.command,
    [...candidate.args, sourceFilePath, '-o', markdownFilePath],
    {
      timeout: MARKITDOWN_TIMEOUT_MS,
    },
  );
}
