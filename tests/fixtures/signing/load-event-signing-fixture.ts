import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function loadEventSigningTextFixture(relativePath: string): string {
  return readFileSync(
    resolve(process.cwd(), 'tests/fixtures/signing', relativePath),
    'utf8',
  );
}