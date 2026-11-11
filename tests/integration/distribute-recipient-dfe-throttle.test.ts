import { distributeRecipientDFe } from '../../src/index';

import { loadRecipientJsonFixture } from '../fixtures/recipient/load-recipient-fixture';

type Fixture = {
  input: {
    actor: { documentNumber: string; documentType: 'cpf' | 'cnpj' };
    environment: 'homologation';
    ultNSU: string;
  };
  responseXml: string;
};

const NOW = new Date('2026-11-10T12:00:00.000Z');
const ONE_HOUR_MS = 60 * 60 * 1000;

function distribute(
  fixture: Fixture,
  responseXml: string = fixture.responseXml,
) {
  return distributeRecipientDFe({
    ...fixture.input,
    now: () => NOW,
    requestExecutor: async () => ({
      headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
      responseXml,
      status: 200,
    }),
    timeoutMs: 5000,
  } as Parameters<typeof distributeRecipientDFe>[0]);
}

describe('distributeRecipientDFe throttle', () => {
  it('imposes at least one hour when ultNSU equals maxNSU after documents were returned', async () => {
    const fixture = loadRecipientJsonFixture<Fixture>(
      'distribution-distnsu-success.json',
    );

    const outcome = await distribute(fixture);

    expect(outcome.classification).toBe('documents-available');
    expect(outcome.cursor.ultNSU).toBe(outcome.cursor.maxNSU);
    expect(outcome.continuation.nextAllowedAt).toBe(
      new Date(NOW.getTime() + ONE_HOUR_MS).toISOString(),
    );
    expect(outcome.continuation.nextAction).toBe('consume-documents');
  });

  it('allows an immediate new query while maxNSU is ahead of ultNSU', async () => {
    const fixture = loadRecipientJsonFixture<Fixture>(
      'distribution-distnsu-success.json',
    );
    const ahead = fixture.responseXml.replace(
      '<maxNSU>000000000000101</maxNSU>',
      '<maxNSU>000000000000150</maxNSU>',
    );

    const outcome = await distribute(fixture, ahead);

    expect(outcome.cursor.hasMoreDocumentsNow).toBe(true);
    expect(outcome.continuation.nextAllowedAt).toBeUndefined();
  });

  it('waits one hour after an empty batch (cStat 137), not the shorter advisory backoff', async () => {
    const fixture = loadRecipientJsonFixture<Fixture>(
      'distribution-distnsu-empty.json',
    );

    const outcome = await distribute(fixture);

    expect(outcome.classification).toBe('no-new-documents');
    expect(outcome.continuation.nextAction).toBe('await-backoff');
    expect(outcome.continuation.nextAllowedAt).toBe(
      new Date(NOW.getTime() + ONE_HOUR_MS).toISOString(),
    );
  });

  it('classifies cStat 656 as consumption abuse and blocks for one hour', async () => {
    const fixture = loadRecipientJsonFixture<Fixture>(
      'distribution-distnsu-empty.json',
    );
    const abuse = fixture.responseXml
      .replace('<cStat>137</cStat>', '<cStat>656</cStat>')
      .replace(
        'Nenhum documento localizado',
        'Rejeicao: Consumo Indevido - Aguarde 1 hora',
      );

    const outcome = await distribute(fixture, abuse);

    expect(outcome.classification).toBe('usage-error');
    expect(outcome.applicationStatusCode).toBe('656');
    expect(outcome.continuation.nextAllowedAt).toBe(
      new Date(NOW.getTime() + ONE_HOUR_MS).toISOString(),
    );
  });

  it('keeps the previous behavior when no clock is injected', async () => {
    const fixture = loadRecipientJsonFixture<Fixture>(
      'distribution-distnsu-empty.json',
    );

    const outcome = await distributeRecipientDFe({
      ...fixture.input,
      requestExecutor: async () => ({
        headers: {},
        responseXml: fixture.responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    const allowedAt = Date.parse(outcome.continuation.nextAllowedAt ?? '');
    expect(allowedAt).toBeGreaterThan(Date.now() + ONE_HOUR_MS - 60_000);
  });
});
