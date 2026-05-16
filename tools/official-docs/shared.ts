import { createHash } from 'node:crypto';
import { promises as fs } from 'node:fs';
import * as path from 'node:path';

export const ROOT_DIR = process.cwd();
export const SOURCE_REGISTRY_PATH = path.join(ROOT_DIR, 'docs', '_meta', 'source-registry.md');
export const OUTPUT_ROOT = path.join(ROOT_DIR, 'docs', '_sources', 'official');
export const MANIFEST_PATH = path.join(ROOT_DIR, 'docs', '_meta', 'official-download-manifest.json');
export const REQUEST_TIMEOUT_MS = 30_000;
export const DEFAULT_MAX_DEPTH = 2;
export const DEFAULT_MAX_PAGES = 250;

const HTML_CONTENT_TYPES = new Set(['text/html', 'application/xhtml+xml']);
const DOWNLOADABLE_EXTENSIONS = new Set(['.pdf', '.zip', '.xml', '.xsd', '.doc', '.docx', '.xls', '.xlsx', '.txt', '.csv', '.rtf', '.odt', '.ods']);
const SKIPPED_EXTENSIONS = new Set(['.css', '.js', '.jpeg', '.jpg', '.png', '.gif', '.svg', '.ico', '.woff', '.woff2', '.ttf', '.eot', '.map']);
const PRIMARY_TYPE_MARKER = '| primary |';
const STATE_PORTAL_SEED_URLS = [
  'http://sefaznet.ac.gov.br/nfe/',
  'http://www.sefaz.al.gov.br/nfe/',
  'https://www.sefaz.ap.gov.br/index.php/nf-e',
  'http://sistemas.sefaz.am.gov.br/nfeweb/portal/index.do',
  'http://www.sefaz.ba.gov.br/scripts/default/nfiscal.asp',
  'http://nfe.sefaz.ce.gov.br/',
  'http://dec.fazenda.df.gov.br/',
  'http://internet.sefaz.es.gov.br/informacoes/nfe/',
  'https://www.economia.go.gov.br/receita-estadual/documentos-fiscais/nfe.html',
  'https://sistemas1.sefaz.ma.gov.br/portalsefaz/jsp/pagina/pagina.jsf?codigo=11',
  'http://www.sefaz.mt.gov.br/portal/nfe/',
  'https://www.sefaz.ms.gov.br/documentos-fiscais-eletronicos/nf-e/',
  'http://www.sped.fazenda.mg.gov.br/',
  'http://www.sefa.pa.gov.br/index.php/component/banners/click/7',
  'https://www.sefaz.pb.gov.br/servirtual/documentos-fiscais/nf-e/consulta-completa',
  'http://www.sped.fazenda.pr.gov.br/modules/conteudo/conteudo.php?conteudo=1',
  'https://www.sefaz.pe.gov.br/Servicos/Nota-Fiscal-Eletronica/Paginas/Apresentacao.aspx',
  'http://portal.sefaz.pi.gov.br/documentoseletronicos/portal/efd/index.php',
  'http://www.fazenda.rj.gov.br/sefaz/faces/webcenter/faces/owResource.jspx?z=oracle.webcenter.doclib%21UCMServer%21UCMServer%2523dDocName%253A100998',
  'http://www.set.rn.gov.br/contentProducao/Aplicacao/SET_v2/nfe/gerados/inicio.asp',
  'http://receita.fazenda.rs.gov.br/lista/2933/nf-e-(nota-fiscal-eletronica)',
  'https://www.sefin.ro.gov.br/conteudo.jsp?idCategoria=524',
  'https://www.sefaz.rr.gov.br/empresa/consultar-internamento-nf',
  'http://nfe.sef.sc.gov.br/',
  'http://www.fazenda.sp.gov.br/nfe/',
  'http://nfe.sefaz.se.gov.br/',
  'http://www.sefaz.to.gov.br/',
];
const EXTRA_SEED_URLS = [
  'https://www.nfe.fazenda.gov.br/portal/listaSubMenu.aspx?Id=04BIflQt1aY=',
  'https://www.nfe.fazenda.gov.br/portal/listaSubMenu.aspx?Id=BMPFMBoln3w=',
  'https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=04BIflQt1aY=',
  'https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=BMPFMBoln3w=',
  'https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=hXzemuyNHW4=',
  'https://www.nfe.fazenda.gov.br/portal/listaConteudo.aspx?tipoConteudo=/NJarYc9nus=',
  'https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Legislacao.aspx',
  'https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Downloads.aspx',
  'https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Servicos.aspx',
  'https://portal.fazenda.sp.gov.br/servicos/nfe/Paginas/Sobre.aspx',
];
const STATE_PORTAL_HOSTNAMES = new Set(STATE_PORTAL_SEED_URLS.map((url) => new URL(url).hostname));

/** Describes one crawl target in the queue. */
export interface CrawlTarget {
  depth: number;
  sourceUrl: string;
  url: string;
}

/** Stores the archived file produced from one fetched URL. */
export interface ArchivedDocument {
  contentType: string;
  depth: number;
  discoveredFrom: string;
  filePath: string;
  size: number;
  status: number;
  url: string;
}

/** Stores a failed fetch attempt for later review. */
export interface FailedDownload {
  error: string;
  sourceUrl: string;
  url: string;
}

/** Stores a skipped URL with the reason it was excluded. */
export interface SkippedDownload {
  reason: string;
  url: string;
}

/** Persists the crawl outcome for traceability and later conversion. */
export interface DownloadManifest {
  archived: ArchivedDocument[];
  failed: FailedDownload[];
  generatedAt: string;
  outputRoot: string;
  seedUrls: string[];
  skipped: SkippedDownload[];
}

/** Represents one fetched payload before archival. */
export interface FetchResult {
  body: Buffer;
  contentType: string;
  finalUrl: string;
  status: number;
}

/**
 * Reads a positive integer from the environment or falls back to a default.
 *
 * @param variableName - Environment variable name.
 * @param fallbackValue - Default numeric value.
 * @returns Parsed positive integer.
 */
export function readPositiveInteger(variableName: string, fallbackValue: number): number {
  const rawValue = process.env[variableName];

  if (!rawValue) {
    return fallbackValue;
  }

  const parsedValue = Number.parseInt(rawValue, 10);
  return Number.isNaN(parsedValue) || parsedValue <= 0 ? fallbackValue : parsedValue;
}

/**
 * Loads primary official URLs from the source registry and merges curated seed pages.
 *
 * @returns Unique list of seed URLs.
 */
export async function loadSeedUrls(): Promise<string[]> {
  const registryMarkdown = await fs.readFile(SOURCE_REGISTRY_PATH, 'utf8');
  const registryUrls = registryMarkdown
    .split('\n')
    .filter((line) => line.includes(PRIMARY_TYPE_MARKER) && line.startsWith('| SRC-'))
    .map(extractRegistryUrl)
    .filter((url): url is string => url !== undefined)
    .filter((url) => url.startsWith('https://'));

  return Array.from(new Set([...registryUrls, ...EXTRA_SEED_URLS, ...STATE_PORTAL_SEED_URLS])).sort((left, right) => left.localeCompare(right));
}

/**
 * Builds the initial manifest structure.
 *
 * @param seedUrls - Seed URLs used to start the crawl.
 * @returns Fresh manifest structure.
 */
export function createManifest(seedUrls: string[]): DownloadManifest {
  return {
    archived: [],
    failed: [],
    generatedAt: new Date().toISOString(),
    outputRoot: path.relative(ROOT_DIR, OUTPUT_ROOT),
    seedUrls,
    skipped: [],
  };
}

/**
 * Determines whether a URL is allowed to be fetched by this crawler.
 *
 * @param candidateUrl - URL under evaluation.
 * @returns True when the URL should be fetched.
 */
export function shouldFetchUrl(candidateUrl: string): boolean {
  try {
    const parsedUrl = new URL(candidateUrl);

    if (!['https:', 'http:'].includes(parsedUrl.protocol)) {
      return false;
    }

    if (parsedUrl.hostname === 'www.nfe.fazenda.gov.br') {
      return parsedUrl.pathname.toLowerCase().startsWith('/portal/') && !parsedUrl.pathname.toLowerCase().includes('/arearestrita/') && !SKIPPED_EXTENSIONS.has(path.extname(parsedUrl.pathname.toLowerCase()));
    }

    if (parsedUrl.hostname === 'portal.fazenda.sp.gov.br') {
      return parsedUrl.pathname.toLowerCase().startsWith('/servicos/nfe/') && !SKIPPED_EXTENSIONS.has(path.extname(parsedUrl.pathname.toLowerCase()));
    }

    if (STATE_PORTAL_HOSTNAMES.has(parsedUrl.hostname)) {
      return !SKIPPED_EXTENSIONS.has(path.extname(parsedUrl.pathname.toLowerCase()));
    }

    return parsedUrl.hostname === 'www1.sped.fazenda.gov.br' && parsedUrl.pathname.startsWith('/spednfeacesso/');
  } catch {
    return false;
  }
}

/**
 * Determines whether a content type should be parsed as HTML.
 *
 * @param contentType - Normalized response content type.
 * @returns True when the payload is HTML.
 */
export function isHtmlContentType(contentType: string): boolean {
  return HTML_CONTENT_TYPES.has(contentType);
}

/**
 * Extracts relevant same-policy links from one HTML page.
 *
 * @param baseUrl - URL that produced the HTML.
 * @param html - Raw HTML text.
 * @returns Unique list of relevant absolute URLs.
 */
export function extractRelevantLinks(baseUrl: string, html: string): string[] {
  const links = new Set<string>();
  const attributePatterns = [/href\s*=\s*['"]([^'"]+)['"]/gi, /<option[^>]+value=['"]([^'"]+)['"]/gi];

  for (const attributePattern of attributePatterns) {
    for (const match of html.matchAll(attributePattern)) {
      const rawHref = match[1]?.trim();

      if (!rawHref || shouldSkipHref(rawHref)) {
        continue;
      }

      try {
        const absoluteUrl = new URL(rawHref, baseUrl);
        absoluteUrl.hash = '';
        const normalizedUrl = absoluteUrl.toString();

        if (shouldFetchUrl(normalizedUrl)) {
          links.add(normalizedUrl);
        }
      } catch {
        continue;
      }
    }
  }

  return Array.from(links).sort((left, right) => left.localeCompare(right));
}

/**
 * Writes one fetched payload into the archival directory.
 *
 * @param sourceUrl - Final fetched URL.
 * @param contentType - Response content type.
 * @param body - Raw response bytes.
 * @returns Absolute file path of the archived payload.
 */
export async function writeArchivedFile(sourceUrl: string, contentType: string, body: Buffer): Promise<string> {
  const targetFilePath = buildOutputFilePath(sourceUrl, contentType);

  await fs.mkdir(path.dirname(targetFilePath), { recursive: true });
  await fs.writeFile(targetFilePath, body);

  return targetFilePath;
}

/**
 * Formats unknown thrown values into readable text.
 *
 * @param error - Unknown thrown value.
 * @returns Readable error message.
 */
export function formatUnknownError(error: unknown): string {
  if (error instanceof Error) {
    return error.message;
  }

  if (typeof error === 'string') {
    return error;
  }

  try {
    return JSON.stringify(error);
  } catch {
    return 'Unknown non-serializable error';
  }
}

/**
 * Extracts the URL column from one source-registry markdown table row.
 *
 * @param registryLine - One markdown table row.
 * @returns The URL column when present.
 */
function extractRegistryUrl(registryLine: string): string | undefined {
  const columns = registryLine.split('|').map((column) => column.trim()).filter((column) => column.length > 0);
  return columns[2];
}

/**
 * Determines whether one raw href should be skipped before URL resolution.
 *
 * @param rawHref - Href extracted from HTML.
 * @returns True when the href should be ignored.
 */
function shouldSkipHref(rawHref: string): boolean {
  return rawHref.startsWith('#') || rawHref.startsWith('javascript:') || rawHref.startsWith('mailto:') || rawHref.includes('{{') || rawHref.includes('}}') || /^(https?|mailto)&/i.test(rawHref);
}

/**
 * Builds a stable local file path for one fetched URL.
 *
 * @param sourceUrl - Final fetched URL.
 * @param contentType - Response content type.
 * @returns Absolute output file path.
 */
function buildOutputFilePath(sourceUrl: string, contentType: string): string {
  const parsedUrl = new URL(sourceUrl);
  const hashSuffix = createHash('sha1').update(sourceUrl).digest('hex').slice(0, 10);
  const normalizedSegments = parsedUrl.pathname.split('/').filter((segment) => segment.length > 0).map((segment) => sanitizePathSegment(decodeURIComponent(segment)));
  const extension = resolveFileExtension(parsedUrl.pathname, contentType);
  const lastSegment = normalizedSegments.at(-1);
  const needsSyntheticFileName = !lastSegment || path.extname(lastSegment).length === 0;
  const fileName = needsSyntheticFileName ? `index-${hashSuffix}${extension}` : `${stripExtension(lastSegment)}-${hashSuffix}${extension}`;
  const directorySegments = needsSyntheticFileName ? normalizedSegments : normalizedSegments.slice(0, -1);

  return path.join(OUTPUT_ROOT, sanitizePathSegment(parsedUrl.hostname), ...directorySegments, fileName);
}

/**
 * Resolves the output file extension from URL path and content type.
 *
 * @param pathname - URL pathname.
 * @param contentType - Response content type.
 * @returns Output file extension with leading dot.
 */
function resolveFileExtension(pathname: string, contentType: string): string {
  const lowerCaseExtension = path.extname(pathname).toLowerCase();

  if (DOWNLOADABLE_EXTENSIONS.has(lowerCaseExtension)) {
    return lowerCaseExtension;
  }

  if (['.aspx', '.ashx', '.html', '.htm'].includes(lowerCaseExtension)) {
    return '.html';
  }

  if (contentType === 'application/pdf') {
    return '.pdf';
  }

  if (contentType === 'application/zip') {
    return '.zip';
  }

  if (contentType === 'application/xml' || contentType === 'text/xml') {
    return '.xml';
  }

  return isHtmlContentType(contentType) ? '.html' : '.bin';
}

/**
 * Sanitizes one path segment for use on disk.
 *
 * @param rawSegment - Original URL path segment.
 * @returns File-system-safe segment.
 */
function sanitizePathSegment(rawSegment: string): string {
  return rawSegment.normalize('NFKD').replace(/[^a-zA-Z0-9._-]+/g, '-').replace(/-+/g, '-').replace(/^-|-$/g, '').toLowerCase() || 'item';
}

/**
 * Removes the current file extension from one file name.
 *
 * @param fileName - File name that may contain an extension.
 * @returns File name without extension.
 */
function stripExtension(fileName: string): string {
  const fileExtension = path.extname(fileName);
  return fileExtension.length > 0 ? fileName.slice(0, -fileExtension.length) : fileName;
}