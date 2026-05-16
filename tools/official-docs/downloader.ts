import { execFile } from 'node:child_process';
import { promises as fs } from 'node:fs';
import * as os from 'node:os';
import * as path from 'node:path';
import { promisify } from 'node:util';
import {
  type CrawlTarget,
  type DownloadManifest,
  type FetchResult,
  DEFAULT_MAX_DEPTH,
  DEFAULT_MAX_PAGES,
  MANIFEST_PATH,
  OUTPUT_ROOT,
  REQUEST_TIMEOUT_MS,
  ROOT_DIR,
  createManifest,
  extractRelevantLinks,
  formatUnknownError,
  isHtmlContentType,
  loadSeedUrls,
  readPositiveInteger,
  shouldFetchUrl,
  writeArchivedFile,
} from './shared';

const execFileAsync = promisify(execFile);

/**
 * Runs the official-document download workflow and writes the crawl manifest.
 *
 * @returns Promise that resolves with the persisted manifest.
 */
export async function runOfficialDocDownload(): Promise<DownloadManifest> {
  const seedUrls = await loadSeedUrls();
  const manifest = createManifest(seedUrls);
  const maxDepth = readPositiveInteger('OFFICIAL_DOCS_MAX_DEPTH', DEFAULT_MAX_DEPTH);
  const maxPages = readPositiveInteger('OFFICIAL_DOCS_MAX_PAGES', DEFAULT_MAX_PAGES);
  const visitedUrls = new Set<string>();
  const queuedUrls = new Set<string>();
  const queue = createInitialQueue(seedUrls, queuedUrls);

  await ensureOutputDirectories();

  while (queue.length > 0 && manifest.archived.length < maxPages) {
    const target = queue.shift();

    if (target) {
      await processTarget({ manifest, maxDepth, queue, queuedUrls, target, visitedUrls });
    }
  }

  await fs.writeFile(MANIFEST_PATH, `${JSON.stringify(manifest, null, 2)}\n`, 'utf8');
  logManifestSummary(manifest);

  return manifest;
}

/** Describes the mutable crawl state needed for one target. */
interface ProcessTargetContext {
  manifest: DownloadManifest;
  maxDepth: number;
  queue: CrawlTarget[];
  queuedUrls: Set<string>;
  target: CrawlTarget;
  visitedUrls: Set<string>;
}

/** Describes the inputs required to enqueue discovered links. */
interface EnqueueLinksContext {
  baseUrl: string;
  html: string;
  nextDepth: number;
  queue: CrawlTarget[];
  queuedUrls: Set<string>;
  sourceUrl: string;
  visitedUrls: Set<string>;
}

/**
 * Processes one crawl target, fetches it, and archives the response.
 *
 * @param context - Mutable crawl state for the target.
 */
async function processTarget(context: ProcessTargetContext): Promise<void> {
  const { manifest, maxDepth, queue, queuedUrls, target, visitedUrls } = context;

  if (visitedUrls.has(target.url)) {
    return;
  }

  visitedUrls.add(target.url);

  if (!shouldFetchUrl(target.url)) {
    manifest.skipped.push({ reason: 'blocked-by-filter', url: target.url });
    return;
  }

  try {
    const fetchResult = await fetchDocument(target.url);
    const archivedFilePath = await writeArchivedFile(fetchResult.finalUrl, fetchResult.contentType, fetchResult.body);

    manifest.archived.push({
      contentType: fetchResult.contentType,
      depth: target.depth,
      discoveredFrom: target.sourceUrl,
      filePath: path.relative(ROOT_DIR, archivedFilePath),
      size: fetchResult.body.byteLength,
      status: fetchResult.status,
      url: fetchResult.finalUrl,
    });

    if (!isHtmlContentType(fetchResult.contentType) || target.depth >= maxDepth) {
      return;
    }

    enqueueDiscoveredLinks({
      baseUrl: fetchResult.finalUrl,
      html: fetchResult.body.toString('utf8'),
      nextDepth: target.depth + 1,
      queue,
      queuedUrls,
      sourceUrl: fetchResult.finalUrl,
      visitedUrls,
    });
  } catch (error: unknown) {
    manifest.failed.push({ error: formatUnknownError(error), sourceUrl: target.sourceUrl, url: target.url });
  }
}

/**
 * Creates the initial crawl queue and records queued URLs.
 *
 * @param seedUrls - Seed URLs for the crawl.
 * @param queuedUrls - Set used to track queued URLs.
 * @returns Initial queue entries.
 */
function createInitialQueue(seedUrls: string[], queuedUrls: Set<string>): CrawlTarget[] {
  const queue = seedUrls.map((url) => ({ depth: 0, sourceUrl: url, url }));

  for (const target of queue) {
    queuedUrls.add(target.url);
  }

  return queue;
}

/**
 * Ensures that output directories exist before the crawl starts.
 *
 * @returns Promise that resolves once the directories are available.
 */
async function ensureOutputDirectories(): Promise<void> {
  await fs.mkdir(OUTPUT_ROOT, { recursive: true });
  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
}

/**
 * Adds newly discovered links to the crawl queue.
 *
 * @param context - Link discovery context.
 */
function enqueueDiscoveredLinks(context: EnqueueLinksContext): void {
  const { baseUrl, html, nextDepth, queue, queuedUrls, sourceUrl, visitedUrls } = context;
  const discoveredUrls = extractRelevantLinks(baseUrl, html);

  for (const discoveredUrl of discoveredUrls) {
    if (visitedUrls.has(discoveredUrl) || queuedUrls.has(discoveredUrl)) {
      continue;
    }

    queue.push({ depth: nextDepth, sourceUrl, url: discoveredUrl });
    queuedUrls.add(discoveredUrl);
  }
}

/**
 * Fetches one document using Node fetch first and curl as a fallback.
 *
 * @param sourceUrl - URL to fetch.
 * @returns Fetched response payload.
 */
async function fetchDocument(sourceUrl: string): Promise<FetchResult> {
  try {
    return await fetchWithNodeFetch(sourceUrl);
  } catch {
    return fetchWithCurl(sourceUrl);
  }
}

/**
 * Fetches one document with the built-in fetch implementation.
 *
 * @param sourceUrl - URL to fetch.
 * @returns Fetched response payload.
 */
async function fetchWithNodeFetch(sourceUrl: string): Promise<FetchResult> {
  const response = await fetch(sourceUrl, {
    redirect: 'follow',
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return {
    body: Buffer.from(await response.arrayBuffer()),
    contentType: response.headers.get('content-type')?.split(';')[0].trim().toLowerCase() ?? 'application/octet-stream',
    finalUrl: response.url,
    status: response.status,
  };
}

/**
 * Fetches one document with curl as a fallback when Node fetch cannot reach the portal.
 *
 * @param sourceUrl - URL to fetch.
 * @returns Fetched response payload.
 */
async function fetchWithCurl(sourceUrl: string): Promise<FetchResult> {
  const temporaryDirectory = await fs.mkdtemp(path.join(os.tmpdir(), 'official-docs-'));
  const bodyPath = path.join(temporaryDirectory, 'body.bin');
  const cookiePath = path.join(temporaryDirectory, 'cookies.txt');

  try {
    const { stdout } = await execFileAsync('curl', [
      '-L', '--silent', '--show-error', '--max-time', String(Math.ceil(REQUEST_TIMEOUT_MS / 1000)),
      '--cookie-jar', cookiePath, '--cookie', cookiePath, '--output', bodyPath,
      '--write-out', '%{http_code}\n%{content_type}\n%{url_effective}\n', sourceUrl,
    ]);
    const [statusLine, contentTypeLine, finalUrlLine] = stdout.trim().split('\n');
    const status = Number.parseInt(statusLine ?? '0', 10);

    if (Number.isNaN(status) || status < 200 || status >= 300) {
      throw new Error(`HTTP ${statusLine ?? 'unknown'}`);
    }

    return {
      body: await fs.readFile(bodyPath),
      contentType: (contentTypeLine || 'application/octet-stream').split(';')[0].trim().toLowerCase(),
      finalUrl: finalUrlLine || sourceUrl,
      status,
    };
  } finally {
    await fs.rm(temporaryDirectory, { force: true, recursive: true });
  }
}

/**
 * Logs a short crawl summary after the manifest has been written.
 *
 * @param manifest - Completed download manifest.
 */
function logManifestSummary(manifest: DownloadManifest): void {
  console.log(`Archived ${manifest.archived.length} official files into ${path.relative(ROOT_DIR, OUTPUT_ROOT)}`);
  console.log(`Manifest written to ${path.relative(ROOT_DIR, MANIFEST_PATH)}`);

  if (manifest.failed.length > 0) {
    console.log(`Failed downloads: ${manifest.failed.length}`);
  }

  if (manifest.skipped.length > 0) {
    console.log(`Skipped URLs: ${manifest.skipped.length}`);
  }
}