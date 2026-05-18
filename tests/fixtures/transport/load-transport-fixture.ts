import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

/**
 * Loads a UTF-8 transport fixture from the shared transport fixture directory.
 *
 * @param relativePath - Path relative to `tests/fixtures/transport`.
 * @returns The fixture text content.
 */
export function loadTransportTextFixture(relativePath: string): string {
  return readFileSync(
    resolve(process.cwd(), 'tests/fixtures/transport', relativePath),
    'utf8',
  );
}

/**
 * Loads a JSON transport fixture from the shared transport fixture directory.
 *
 * @param relativePath - Path relative to `tests/fixtures/transport`.
 * @returns Parsed fixture payload.
 */
export function loadTransportJsonFixture<T>(relativePath: string): T {
  return JSON.parse(loadTransportTextFixture(relativePath)) as T;
}