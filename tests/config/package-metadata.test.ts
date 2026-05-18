import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

describe('package metadata', () => {
  it('keeps the package configured for ESM distribution', () => {
    const packageJson = JSON.parse(
      readFileSync(resolve(process.cwd(), 'package.json'), 'utf8'),
    ) as {
      exports?: Record<string, unknown>;
      scripts?: Record<string, string>;
      type?: string;
    };

    expect(packageJson.type).toBe('module');
    expect(packageJson.exports).toEqual(
      expect.objectContaining({
        '.': expect.any(Object),
      }),
    );
    expect(packageJson.scripts?.typecheck).toContain('tsc');
  });
});
