import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function loadSigningTextFixture(relativePath: string): string {
  return readFileSync(
    resolve(process.cwd(), 'tests/fixtures/signing', relativePath),
    'utf8',
  );
}

export function loadSigningJsonFixture<T>(relativePath: string): T {
  return JSON.parse(loadSigningTextFixture(relativePath)) as T;
}
