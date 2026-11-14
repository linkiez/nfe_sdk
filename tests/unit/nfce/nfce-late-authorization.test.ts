import { mapNFCeAuthorizationOutcome } from '../../../src/canonical/nfce/authorization-outcome';
import type { NFeAuthorizationOutcome } from '../../../src/canonical/nfe/contracts';

const outcome = (overrides: Partial<NFeAuthorizationOutcome> = {}): NFeAuthorizationOutcome =>
  ({
    classification: 'authorized',
    documentStatuses: [],
    protocolNumber: '135260000000001',
    protocolStatusCode: '100',
    ...overrides,
  }) as NFeAuthorizationOutcome;

describe('mapNFCeAuthorizationOutcome (authorization after the deadline and no denial)', () => {
  it('flags cStat 150 (authorized out of time) as authorized late', () => {
    const mapped = mapNFCeAuthorizationOutcome(outcome({ protocolStatusCode: '150' }));

    expect(mapped.classification).toBe('authorized');
    expect(mapped.authorizedLate).toBe(true);
    expect(mapped.protocolStatusCode).toBe('150');
  });

  it('does not flag a regular authorization (cStat 100)', () => {
    const mapped = mapNFCeAuthorizationOutcome(outcome());

    expect(mapped.classification).toBe('authorized');
    expect(mapped.authorizedLate).toBeUndefined();
    expect(mapped.protocolStatusCode).toBe('100');
  });

  it('never flags a document that is not authorized', () => {
    const mapped = mapNFCeAuthorizationOutcome(
      outcome({ classification: 'rejected', protocolStatusCode: '150' }),
    );

    expect(mapped.authorizedLate).toBeUndefined();
  });

  it('keeps the QR Code only for an authorized document', () => {
    const url = 'https://www.nfce.fazenda.sp.gov.br/qr?p=1|3|1';

    expect(mapNFCeAuthorizationOutcome(outcome({ protocolStatusCode: '150' }), url).qrCodeUrl).toBe(url);
    expect(
      mapNFCeAuthorizationOutcome(outcome({ classification: 'rejected' }), url).qrCodeUrl,
    ).toBeUndefined();
  });

  it('carries the official rejection reason, such as the 781 of an issuer not enabled', () => {
    const mapped = mapNFCeAuthorizationOutcome(
      outcome({
        classification: 'rejected',
        failureReason: 'Rejeicao 781: emissor nao habilitado para emissao da NFC-e',
        protocolStatusCode: '781',
      }),
    );

    expect(mapped.classification).toBe('rejected');
    expect(mapped.failureReason).toContain('781');
  });

  it.each(['110', '301', '302'])(
    'never reports denial for the NFC-e: a denial answer (cStat %s) becomes an unexpected-response protocol error',
    (code) => {
      const mapped = mapNFCeAuthorizationOutcome(
        outcome({
          classification: 'denied',
          failureReason: undefined,
          protocolStatusCode: code,
        }),
      );

      expect(mapped.classification).toBe('protocol-error');
      expect(mapped.classification).not.toBe('denied');
      expect(mapped.failureReason).toContain(code);
      expect(mapped.failureReason).toMatch(/denega/i);
      expect(mapped.authorizedLate).toBeUndefined();
    },
  );
});
