import { runOfficialDocDownload } from './official-docs/downloader';
import { formatUnknownError } from './official-docs/shared';

try {
  await runOfficialDocDownload();
} catch (error: unknown) {
  const message = formatUnknownError(error);
  console.error(message);
  process.exitCode = 1;
}