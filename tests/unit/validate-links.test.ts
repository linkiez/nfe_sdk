import { mkdtemp, mkdir, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

import { validateMarkdownLinks } from '../../tools/validate-links';

describe('validateMarkdownLinks', () => {
  it('resolves relative markdown links including implicit extensions and directory indexes', async () => {
    const fixtureRoot = await mkdtemp(join(tmpdir(), 'nfe-sdk-links-'));

    try {
      await mkdir(join(fixtureRoot, 'docs', 'guide'), { recursive: true });
      await mkdir(join(fixtureRoot, 'docs', 'manual'), { recursive: true });
      await writeFile(join(fixtureRoot, 'docs', 'README.md'), '# README\n');
      await writeFile(
        join(fixtureRoot, 'docs', 'manual', 'index.md'),
        '# Manual\n',
      );
      await writeFile(
        join(fixtureRoot, 'docs', 'guide', 'index.md'),
        ['[README](../README)', '[Manual](../manual/)'].join('\n'),
      );

      const result = await validateMarkdownLinks(['docs/guide/index.md'], {
        cwd: fixtureRoot,
      });

      expect(result).toEqual({
        brokenLinksByFile: {},
        isValid: true,
      });
    } finally {
      await rm(fixtureRoot, { force: true, recursive: true });
    }
  });

  it('reports unresolved targets and missing source files', async () => {
    const fixtureRoot = await mkdtemp(join(tmpdir(), 'nfe-sdk-links-'));

    try {
      await mkdir(join(fixtureRoot, 'docs'), { recursive: true });
      await writeFile(
        join(fixtureRoot, 'docs', 'index.md'),
        ['[Broken](./missing.md)'].join('\n'),
      );

      const result = await validateMarkdownLinks(
        ['docs/index.md', 'docs/missing-source.md'],
        {
          cwd: fixtureRoot,
        },
      );

      expect(result).toEqual({
        brokenLinksByFile: {
          'docs/index.md': ['./missing.md'],
          'docs/missing-source.md': ['File not found: docs/missing-source.md'],
        },
        isValid: false,
      });
    } finally {
      await rm(fixtureRoot, { force: true, recursive: true });
    }
  });
});
