import { createEnviNFe, createNFe } from '../../src/index';
import { loadCanonicalJsonFixture } from '../fixtures/canonical-nfe/load-canonical-fixture';

const nFeMinimalInput = loadCanonicalJsonFixture<{
  documentId: string;
  environment: string;
  version: string;
}>('nfe-minimal-input.json');

const enviNFeMinimalInput = loadCanonicalJsonFixture<{
  batchId: string;
  documents: Array<{
    documentId: string;
    environment: string;
    version: string;
  }>;
  environment: string;
  version: string;
}>('envi-nfe-minimal-input.json');

describe('canonical nfe facade', () => {
  it('creates a canonical NFe from the root facade', () => {
    const document = createNFe(nFeMinimalInput);

    expect(document.kind).toBe('NFe');
    expect(document.metadata).toEqual(
      expect.objectContaining({
        documentId: nFeMinimalInput.documentId,
        environment: nFeMinimalInput.environment,
        version: nFeMinimalInput.version,
      }),
    );
  });

  it('creates a canonical enviNFe from the root facade', () => {
    const batch = createEnviNFe(enviNFeMinimalInput);

    expect(batch.kind).toBe('enviNFe');
    expect(batch.metadata).toEqual(
      expect.objectContaining({
        batchId: enviNFeMinimalInput.batchId,
        environment: enviNFeMinimalInput.environment,
        version: enviNFeMinimalInput.version,
      }),
    );
    expect(batch.documents).toHaveLength(1);
    expect(batch.documents[0]?.metadata.documentId).toBe(
      nFeMinimalInput.documentId,
    );
  });
});
