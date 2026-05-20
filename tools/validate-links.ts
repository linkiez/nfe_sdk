import { readFile, stat } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';

const MARKDOWN_EXTENSION = '.md';
const MARKDOWN_INDEX_FILE = 'index.md';
const IGNORED_LINK_PREFIXES = ['http://', 'https://', 'mailto:', '#'] as const;

/**
 * Lists the markdown files validated by each CLI entrypoint.
 */
export const LINK_VALIDATION_TARGETS = {
  comprehensive: [
    'README.md',
    'docs/index.md',
    'docs/roadmap/ROADMAP.md',
    'docs/capacidades-sdk.md',
    'docs/documentos-oficiais-portal-nfe.md',
    'docs/_meta/source-registry.md',
    'docs/roadmap/coverage-matrix.md',
    'docs/roadmap/topicos-oficiais.md',
    'docs/roadmap/portal-documentos-vigentes.md',
    'docs/roadmap/portal-nacional-inventario.md',
    'docs/roadmap/hosts-oficiais.md',
    'docs/roadmap/ufs-ambientes.md',
    'docs/roadmap/specs-implementacao.md',
    'docs/roadmap/specs-pendencias-abertas.md',
    'docs/roadmap/rtm-cobertura-oficial.md',
    'docs/roadmap/proximas-iteracoes-recomendadas.md',
    'docs/roadmap/checklist-fechamento-007-010.md',
    'docs/roadmap/nfce-operacional-promovivel.md',
    'docs/roadmap/criterios-promocao.md',
    'docs/roadmap/politica-tabelas-externas.md',
  ],
  custom: [
    'docs/documentos-oficiais-portal-nfe.md',
    'docs/roadmap/portal-nacional-inventario.md',
    'docs/roadmap/portal-documentos-vigentes.md',
  ],
  default: [
    'docs/roadmap/topicos-oficiais.md',
    'docs/roadmap/portal-documentos-vigentes.md',
  ],
  nf: [
    'docs/documentos-oficiais-portal-nfe.md',
    'docs/roadmap/topicos-oficiais.md',
    'docs/roadmap/portal-documentos-vigentes.md',
    'docs/roadmap/portal-nacional-inventario.md',
    'docs/roadmap/ufs-ambientes.md',
  ],
} as const;

/**
 * Controls how markdown links are resolved and where the CLI writes its report.
 */
export interface MarkdownLinkValidationOptions {
  cwd?: string;
  stderr?: NodeJS.WriteStream;
  stdout?: NodeJS.WriteStream;
  successMessage?: string;
}

/**
 * Represents the validation outcome for a batch of markdown files.
 */
export interface MarkdownLinkValidationResult {
  brokenLinksByFile: Record<string, string[]>;
  isValid: boolean;
}

/**
 * Validates the internal markdown links for a list of repository-relative files.
 *
 * @param filePaths - Repository-relative markdown files to inspect.
 * @param options - Resolution settings and optional output streams.
 * @returns The grouped broken links and an aggregate validity flag.
 */
export async function validateMarkdownLinks(
  filePaths: readonly string[],
  options: MarkdownLinkValidationOptions = {},
): Promise<MarkdownLinkValidationResult> {
  const cwd = options.cwd ?? process.cwd();
  const brokenLinksByFile: Record<string, string[]> = {};

  for (const filePath of filePaths) {
    const brokenLinks = await checkLinksInFile(filePath, cwd);

    if (brokenLinks.length > 0) {
      brokenLinksByFile[filePath] = brokenLinks;
    }
  }

  return {
    brokenLinksByFile,
    isValid: Object.keys(brokenLinksByFile).length === 0,
  };
}

/**
 * Formats the grouped validation errors using the existing repository report shape.
 *
 * @param result - Validation result to serialize.
 * @returns A human-readable report string.
 */
export function formatMarkdownLinkValidationReport(
  result: MarkdownLinkValidationResult,
): string {
  return Object.entries(result.brokenLinksByFile)
    .map(([filePath, brokenLinks]) => {
      const linkLines = brokenLinks.map((link) => `  Broken link: ${link}`).join('\n');
      return [`File: ${filePath}`, linkLines].join('\n');
    })
    .join('\n');
}

/**
 * Executes the validator as a CLI and writes either the success banner or the grouped errors.
 *
 * @param filePaths - Repository-relative markdown files to inspect.
 * @param options - Resolution settings and optional output streams.
 * @returns The process exit code that should be exposed by the CLI entrypoint.
 */
export async function runMarkdownLinkValidationCli(
  filePaths: readonly string[],
  options: MarkdownLinkValidationOptions = {},
): Promise<number> {
  const stdout = options.stdout ?? process.stdout;
  const stderr = options.stderr ?? process.stderr;
  const successMessage = options.successMessage ?? 'No broken internal links found.';
  const result = await validateMarkdownLinks(filePaths, options);

  if (result.isValid) {
    stdout.write(`${successMessage}\n`);
    return 0;
  }

  stderr.write(`${formatMarkdownLinkValidationReport(result)}\n`);
  return 1;
}

/**
 * Reads a markdown file and returns the unresolved internal links it contains.
 *
 * @param filePath - Repository-relative markdown file path.
 * @param cwd - Repository root used to resolve links.
 * @returns The unresolved links found in the file, or a file-not-found entry.
 */
async function checkLinksInFile(filePath: string, cwd: string): Promise<string[]> {
  const absoluteFilePath = resolve(cwd, filePath);

  if (!(await pathExists(absoluteFilePath))) {
    return [`File not found: ${filePath}`];
  }

  const content = await readFile(absoluteFilePath, 'utf8');
  const links = extractMarkdownLinks(content);
  const brokenLinks: string[] = [];

  for (const link of links) {
    if (isIgnoredLink(link)) {
      continue;
    }

    const linkPath = link.split('#', 1)[0];

    if (!linkPath) {
      continue;
    }

    const targetPath = resolve(dirname(absoluteFilePath), linkPath);

    if (!(await targetExists(targetPath))) {
      brokenLinks.push(link);
    }
  }

  return brokenLinks;
}

/**
 * Extracts markdown link targets from the provided file content.
 *
 * @param content - Markdown source content.
 * @returns The collected link targets in appearance order.
 */
function extractMarkdownLinks(content: string): string[] {
  const linkPattern = /\[[^\]]*\]\((.*?)\)/g;
  const links: string[] = [];

  for (const match of content.matchAll(linkPattern)) {
    const link = match[1];

    if (link) {
      links.push(link);
    }
  }

  return links;
}

/**
 * Determines whether a link should be skipped because it does not resolve to a repository file.
 *
 * @param link - Raw markdown target.
 * @returns True when the target is an external, mailto, or fragment-only link.
 */
function isIgnoredLink(link: string): boolean {
  return IGNORED_LINK_PREFIXES.some((prefix) => link.startsWith(prefix));
}

/**
 * Checks whether the resolved target path exists as a file, an implicit markdown file, or a
 * directory with an index document.
 *
 * @param targetPath - Absolute path produced from the markdown link.
 * @returns True when the target is resolvable by the repository rules.
 */
async function targetExists(targetPath: string): Promise<boolean> {
  const targetStat = await getPathStat(targetPath);

  if (targetStat) {
    if (targetStat.isDirectory()) {
      return pathExists(resolve(targetPath, MARKDOWN_INDEX_FILE));
    }

    return true;
  }

  if (targetPath.endsWith(MARKDOWN_EXTENSION)) {
    return false;
  }

  return pathExists(`${targetPath}${MARKDOWN_EXTENSION}`);
}

/**
 * Checks whether a path exists.
 *
 * @param targetPath - Absolute path to inspect.
 * @returns True when the path is present in the file system.
 */
async function pathExists(targetPath: string): Promise<boolean> {
  return (await getPathStat(targetPath)) !== undefined;
}

/**
 * Retrieves file system metadata when the path exists.
 *
 * @param targetPath - Absolute path to inspect.
 * @returns The file stats when found, otherwise undefined.
 */
async function getPathStat(targetPath: string) {
  try {
    return await stat(targetPath);
  } catch {
    return undefined;
  }
}