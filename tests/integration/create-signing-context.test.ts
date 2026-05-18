import * as publicApi from '../../src/index';
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { resolve } from 'node:path';

import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

describe('createSigningContext integration', () => {
  it('creates a reusable signing context from in-memory A1 content', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;

    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    expect(signingContext).toEqual(
      expect.objectContaining({
        certificateIdentity: expect.any(String),
        sourceMetadata: expect.objectContaining({
          type: 'in-memory-content',
        }),
      }),
    );
  });

  it('creates a reusable signing context from a file-path A1 source', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { filePath: string; type: 'file-path' };
        }) => Promise<unknown>)
      | undefined;
    const fixtureDirectory = await mkdtemp(resolve(tmpdir(), 'nfe-sdk-a1-'));
    const fixtureFilePath = resolve(fixtureDirectory, 'fixture-a1.pfx');

    try {
      await writeFile(
        fixtureFilePath,
        Buffer.from(fixtureSource.certificateBase64, 'base64'),
      );

      const signingContext = await createSigningContext?.({
        passphrase: fixtureSource.passphrase,
        source: {
          filePath: fixtureFilePath,
          type: 'file-path',
        },
      });

      expect(signingContext).toEqual(
        expect.objectContaining({
          certificateIdentity: expect.any(String),
          sourceMetadata: expect.objectContaining({
            filePath: fixtureFilePath,
            type: 'file-path',
          }),
        }),
      );
    } finally {
      await rm(fixtureDirectory, { force: true, recursive: true });
    }
  });
});
