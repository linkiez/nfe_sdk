import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Loads a UTF-8 operational fixture from the shared NFe operational fixture directory.
 *
 * @param relativePath - Path relative to `tests/fixtures/nfe-operational`.
 * @returns The fixture text content.
 */
export function loadNFeOperationalTextFixture(relativePath: string): string {
  return readFileSync(
    resolve(process.cwd(), 'tests/fixtures/nfe-operational', relativePath),
    'utf8',
  );
}

/**
 * Loads a JSON operational fixture from the shared NFe operational fixture directory.
 *
 * @param relativePath - Path relative to `tests/fixtures/nfe-operational`.
 * @returns Parsed fixture payload.
 */
export function loadNFeOperationalJsonFixture<T>(relativePath: string): T {
  return JSON.parse(loadNFeOperationalTextFixture(relativePath)) as T;
}
