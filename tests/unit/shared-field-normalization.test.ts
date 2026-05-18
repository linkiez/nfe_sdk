import { normalizeBatchId } from '../../src/canonical/shared/batch-id-rule';
import { normalizeDocumentId } from '../../src/canonical/shared/document-id-rule';
import { normalizeEnvironment } from '../../src/canonical/shared/environment-rule';
import { normalizeVersion } from '../../src/canonical/shared/version-rule';

describe('shared field normalization', () => {
  it('normalizes the supported environment values', () => {
    expect(normalizeEnvironment(' homologation ')).toBe('homologation');
    expect(normalizeEnvironment('production')).toBe('production');
  });

  it('normalizes the supported version value', () => {
    expect(normalizeVersion('4.00')).toBe('4.00');
  });

  it('normalizes required identifiers for documents and batches', () => {
    expect(normalizeDocumentId('  NFe001  ')).toBe('NFe001');
    expect(normalizeBatchId('  0001  ')).toBe('0001');
  });

  it('rejects unsupported shared values', () => {
    expect(() => normalizeEnvironment('sandbox')).toThrow(
      'Unsupported canonical environment. Use "homologation" or "production".',
    );
    expect(() => normalizeVersion('3.10')).toThrow(
      'Unsupported canonical version. Use "4.00".',
    );
    expect(() => normalizeDocumentId('   ')).toThrow(
      'documentId is required for the canonical facade.',
    );
    expect(() => normalizeBatchId('')).toThrow(
      'batchId is required for the canonical facade.',
    );
  });
});
