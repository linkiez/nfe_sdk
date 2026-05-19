import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Loads a UTF-8 recipient fixture from the shared recipient fixture directory.
 *
 * @param relativePath - Path relative to `tests/fixtures/recipient`.
 * @returns The fixture text content.
 */
export function loadRecipientTextFixture(relativePath: string): string {
  return readFileSync(
    resolve(process.cwd(), 'tests/fixtures/recipient', relativePath),
    'utf8',
  );
}

/**
 * Loads a JSON recipient fixture from the shared recipient fixture directory.
 *
 * @param relativePath - Path relative to `tests/fixtures/recipient`.
 * @returns Parsed fixture payload.
 */
export function loadRecipientJsonFixture<T>(relativePath: string): T {
  return JSON.parse(loadRecipientTextFixture(relativePath)) as T;
}
