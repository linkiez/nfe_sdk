import { promises as fs } from 'node:fs';
import * as path from 'node:path';
import { fetchDocument } from './official-docs/downloader';
import {
  MANIFEST_PATH,
  ROOT_DIR,
  extractRelevantLinks,
  formatUnknownError,
  type DownloadManifest,
  writeArchivedFile,
} from './official-docs/shared';

interface PageAssetDownloadOptions {
  htmlFilePath: string;
  pageUrl: string;
  replaceExisting: boolean;
}

/**
 * Downloads all file assets linked from one archived official HTML page.
 *
 * @param options - Archived page location and original page URL.
 * @returns Updated manifest and counters for the targeted download run.
 */
export async function runOfficialPageAssetDownload(options: PageAssetDownloadOptions): Promise<{
  downloadedCount: number;
  failedCount: number;
  manifest: DownloadManifest;
  skippedCount: number;
}> {
  const htmlContent = await fs.readFile(options.htmlFilePath, 'utf8');
  const manifest = await readManifest();
  const assetUrls = extractPageAssetUrls(options.pageUrl, htmlContent);
  let downloadedCount = 0;
  let failedCount = 0;
  let skippedCount = 0;

  for (const assetUrl of assetUrls) {
    const comparableUrl = normalizeComparableUrl(assetUrl);
    const existingDocumentIndex = manifest.archived.findIndex((entry) => normalizeComparableUrl(entry.url) === comparableUrl);

    if (existingDocumentIndex >= 0 && !options.replaceExisting) {
      skippedCount += 1;
    } else {
      try {
        const fetchResult = await fetchDocument(assetUrl);
        const archivedFilePath = await writeArchivedFile(fetchResult.finalUrl, fetchResult.contentType, fetchResult.body, fetchResult.downloadFileName);
        const archivedDocument = {
          contentType: fetchResult.contentType,
          depth: 1,
          discoveredFrom: options.pageUrl,
          filePath: path.relative(ROOT_DIR, archivedFilePath),
          size: fetchResult.body.byteLength,
          status: fetchResult.status,
          url: fetchResult.finalUrl,
        };

        if (existingDocumentIndex >= 0) {
          await removePreviousArchivedFile(manifest.archived[existingDocumentIndex]?.filePath, archivedDocument.filePath);
          manifest.archived[existingDocumentIndex] = archivedDocument;
        } else {
          manifest.archived.push(archivedDocument);
        }

        downloadedCount += 1;
      } catch (error: unknown) {
        manifest.failed.push({
          error: formatUnknownError(error),
          sourceUrl: options.pageUrl,
          url: assetUrl,
        });
        failedCount += 1;
      }
    }
  }

  manifest.generatedAt = new Date().toISOString();
  await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');

  return { downloadedCount, failedCount, manifest, skippedCount };
}

/**
 * Parses CLI arguments for the archived page file and the original page URL.
 *
 * @returns Resolved command options.
 * @throws {Error} When required arguments are missing.
 */
function parseCliArguments(): PageAssetDownloadOptions {
  const rawArguments = process.argv.slice(2);
  const replaceExisting = rawArguments.includes('--replace-existing');
  const positionalArguments = rawArguments.filter((argument) => argument !== '--replace-existing');
  const [htmlFilePathArgument, pageUrlArgument] = positionalArguments;

  if (!htmlFilePathArgument || !pageUrlArgument) {
    throw new Error('Usage: tsx tools/download-official-page-assets.ts [--replace-existing] <archived-html-file> <page-url>');
  }

  return {
    htmlFilePath: path.resolve(ROOT_DIR, htmlFilePathArgument),
    pageUrl: pageUrlArgument,
    replaceExisting,
  };
}

/**
 * Reads the current official download manifest from disk.
 *
 * @returns Persisted manifest contents.
 */
async function readManifest(): Promise<DownloadManifest> {
  const manifestContent = await fs.readFile(MANIFEST_PATH, 'utf8');
  return JSON.parse(manifestContent) as DownloadManifest;
}

/**
 * Removes a previous archived file when one manifest entry is being rewritten.
 *
 * @param previousRelativePath - Existing relative file path stored in the manifest.
 * @param nextRelativePath - New relative file path stored in the manifest.
 */
async function removePreviousArchivedFile(previousRelativePath: string | undefined, nextRelativePath: string): Promise<void> {
  if (!previousRelativePath || previousRelativePath === nextRelativePath) {
    return;
  }

  await fs.rm(path.join(ROOT_DIR, previousRelativePath), { force: true });
}

/**
 * Extracts downloadable asset URLs from one archived Portal NF-e HTML page.
 *
 * @param pageUrl - Original URL of the archived page.
 * @param htmlContent - Archived HTML content.
 * @returns Normalized absolute asset URLs.
 */
function extractPageAssetUrls(pageUrl: string, htmlContent: string): string[] {
  const normalizedUrls = new Set<string>();
  const attributePattern = /href\s*=\s*['"]([^'"]+)['"]/gi;

  for (const match of htmlContent.matchAll(attributePattern)) {
    const rawHref = match[1];

    if (rawHref) {
      const decodedHref = decodeHtmlEntities(rawHref).replace(/\s+/g, '');

      if (decodedHref.includes('exibirArquivo.aspx?conteudo=')) {
        const absoluteUrl = new URL(decodedHref, pageUrl);

        if (isPortalFileDownloadUrl(absoluteUrl.toString())) {
          normalizedUrls.add(absoluteUrl.toString());
        }
      }
    }
  }

  if (normalizedUrls.size > 0) {
    return Array.from(normalizedUrls).sort((left, right) => left.localeCompare(right));
  }

  return extractRelevantLinks(pageUrl, htmlContent).filter(isPortalFileDownloadUrl);
}

/**
 * Decodes the subset of HTML entities used inside archived href attributes.
 *
 * @param value - Encoded attribute value.
 * @returns Decoded string.
 */
function decodeHtmlEntities(value: string): string {
  return value
    .replace(/&#x([0-9a-f]+);/gi, (_, codePoint: string) => String.fromCodePoint(Number.parseInt(codePoint, 16)))
    .replace(/&#(\d+);/g, (_, codePoint: string) => String.fromCodePoint(Number.parseInt(codePoint, 10)))
    .replaceAll('&amp;', '&');
}

/**
 * Normalizes one archived URL for duplicate detection across redirects.
 *
 * @param url - URL to normalize.
 * @returns Comparable URL string.
 */
function normalizeComparableUrl(url: string): string {
  const parsedUrl = new URL(url);

  if (isPortalFileDownloadUrl(parsedUrl.toString())) {
    const comparableUrl = new URL('https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx');
    const contentValue = parsedUrl.searchParams.get('conteudo') ?? '';

    comparableUrl.searchParams.set('conteudo', contentValue);
    return comparableUrl.toString();
  }

  parsedUrl.hash = '';
  parsedUrl.protocol = 'https:';
  parsedUrl.hostname = 'www.nfe.fazenda.gov.br';
  parsedUrl.searchParams.delete('AspxAutoDetectCookieSupport');
  return parsedUrl.toString();
}

/**
 * Determines whether one URL is a Portal NF-e file-download endpoint.
 *
 * @param url - Candidate URL.
 * @returns True when the URL points to exibirArquivo.aspx.
 */
function isPortalFileDownloadUrl(url: string): boolean {
  const parsedUrl = new URL(url);
  return parsedUrl.hostname === 'www.nfe.fazenda.gov.br' && parsedUrl.pathname.toLowerCase() === '/portal/exibirarquivo.aspx';
}

const options = parseCliArguments();

try {
  const { downloadedCount, failedCount, manifest, skippedCount } = await runOfficialPageAssetDownload(options);

  console.log(
    JSON.stringify(
      {
        archivedEntries: manifest.archived.length,
        downloadedCount,
        failedCount,
        pageUrl: options.pageUrl,
        skippedCount,
      },
      null,
      2,
    ),
  );
} catch (error: unknown) {
  console.error(formatUnknownError(error));
  process.exitCode = 1;
}