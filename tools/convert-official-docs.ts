import { runOfficialDocConversion } from './official-docs/converter';
import { formatUnknownError } from './official-docs/shared';

try {
  await runOfficialDocConversion();
} catch (error: unknown) {
  const message = formatUnknownError(error);
  console.error(message);
  process.exitCode = 1;
}