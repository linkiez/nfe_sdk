import {
  getRecipientCoverageBoundary,
  getRecipientRecommendedBackoffMs,
  isRecipientDependencyLimited,
  isRecipientUsageBoundary,
} from '../../src/canonical/recipient/recipient-coverage-boundary';

describe('recipient coverage boundary helpers', () => {
  it('describes the supported and excluded recipient scope explicitly', () => {
    expect(getRecipientCoverageBoundary()).toEqual({
      excludedScope: [
        'production',
        'consNSU',
        'consChNFe',
        'generic-events',
        'EPEC',
        'auto-download-after-manifestation',
        'multi-uf-expansion',
      ],
      externalDependencies: [
        'digital-certificate',
        'recipient-enablement',
        'national-service-availability',
      ],
      includedScope: [
        'homologation',
        'distNSU',
        'cpf',
        'cnpj',
        'summary-envelopes',
        'full-document-envelopes',
        '210200',
        '210210',
        '210220',
        '210240',
      ],
    });
  });

  it('keeps usage, dependency, and backoff signals distinct', () => {
    expect(
      isRecipientDependencyLimited('280', 'Solicitante nao habilitado'),
    ).toBe(true);
    expect(isRecipientUsageBoundary('656', 'Consumo indevido')).toBe(true);
    expect(getRecipientRecommendedBackoffMs('137')).toBe(300000);
    expect(getRecipientRecommendedBackoffMs('656')).toBe(3600000);
  });
});
