import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export function loadCanonicalJsonFixture<T>(relativePath: string): T {
  const fixturePath = resolve(
    process.cwd(),
    'tests/fixtures/canonical-nfe',
    relativePath,
  );

  return JSON.parse(readFileSync(fixturePath, 'utf8')) as T;
}

export function loadCanonicalTextFixture(relativePath: string): string {
  const fixturePath = resolve(
    process.cwd(),
    'tests/fixtures/canonical-nfe',
    relativePath,
  );

  return readFileSync(fixturePath, 'utf8');
}
