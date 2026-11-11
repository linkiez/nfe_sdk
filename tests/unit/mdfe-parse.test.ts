import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import {
  MDFeParseError,
  parseMDFeXml,
  validateMDFeXml,
} from '../../src/canonical/mdfe/index';

const KEY = '35261111222333000181580010000000011123456780';
const fixture = (name: string): string =>
  readFileSync(resolve(process.cwd(), 'tests/fixtures/mdfe', name), 'utf8');

describe('parseMDFeXml', () => {
  it('reads an authorized mdfeProc', () => {
    const parsed = parseMDFeXml(fixture('mdfe-proc-authorized.xml'));

    expect(parsed).toMatchObject({
      kind: 'document',
      accessKey: KEY,
      layoutVersion: '3.00',
      environment: 'homologation',
      issuer: { taxId: '11222333000181', name: 'EMPRESA TESTE LTDA' },
      series: '1',
      number: '1',
      issuedAt: '2026-11-10T12:00:00-03:00',
      modal: 'road',
      originUF: 'SP',
      destinationUF: 'RJ',
      authorized: true,
      protocol: {
        number: '135260000000001',
        statusCode: '100',
        receivedAt: '2026-11-10T12:00:05-03:00',
      },
      totals: {
        documents: 1,
        cargoValue: '1000.00',
        cargoQuantity: '100.0000',
        cargoUnit: '01',
      },
    });
  });

  it('reads the vehicles, drivers, unloading municipalities and linked documents', () => {
    expect(parseMDFeXml(fixture('mdfe-proc-authorized.xml'))).toMatchObject({
      kind: 'document',
      vehiclePlates: ['ABC1D23'],
      drivers: [{ name: 'MOTORISTA TESTE', taxId: '12345678909' }],
      unloadingMunicipalityCodes: ['3304557'],
      linkedDocuments: [
        {
          kind: 'nfe',
          accessKey: '35261111222333000181550010000000011123456780',
        },
      ],
    });
  });

  it('reads a document without protocol as not authorized', () => {
    const xml = fixture('mdfe-proc-authorized.xml')
      .replace(/<protMDFe[\s\S]*<\/protMDFe>/u, '')
      .replace(
        '<mdfeProc xmlns="http://www.portalfiscal.inf.br/mdfe" versao="3.00">',
        '<mdfeProc xmlns="http://www.portalfiscal.inf.br/mdfe" versao="3.00">',
      );
    const parsed = parseMDFeXml(xml);

    expect(parsed).toMatchObject({ kind: 'document', authorized: false });
    expect((parsed as { protocol?: unknown }).protocol).toBeUndefined();
  });

  it('reads a closure event', () => {
    expect(parseMDFeXml(fixture('mdfe-event-closure.xml'))).toMatchObject({
      kind: 'event',
      accessKey: KEY,
      eventType: '110112',
      eventName: 'closure',
      sequence: 1,
      environment: 'homologation',
      eventAt: '2026-11-10T18:00:00-03:00',
      registered: true,
      statusCode: '135',
      protocol: '335260000000009',
      details: {
        closureDate: '2026-11-10',
        closureMunicipalityCode: '3304557',
        closureUF: '35',
      },
    });
  });

  it('reads a cancellation event', () => {
    expect(parseMDFeXml(fixture('mdfe-event-cancellation.xml'))).toMatchObject({
      kind: 'event',
      eventType: '110111',
      eventName: 'cancellation',
      registered: true,
      details: {
        authorizationProtocol: '135260000000001',
        justification: 'Erro de digitacao no teste do MDF-e',
      },
    });
  });

  it('treats an event rejected by SEFAZ as not registered', () => {
    const xml = fixture('mdfe-event-closure.xml')
      .replace('<cStat>135</cStat>', '<cStat>489</cStat>')
      .replace('Evento registrado e vinculado a MDF-e', 'Rejeicao');

    expect(parseMDFeXml(xml)).toMatchObject({
      kind: 'event',
      registered: false,
      statusCode: '489',
    });
  });

  it.each([
    ['text that is not XML', 'not xml at all', 'not-xml'],
    [
      'an NF-e document',
      '<nfeProc xmlns="http://www.portalfiscal.inf.br/nfe" versao="4.00"><NFe/></nfeProc>',
      'unsupported-root',
    ],
    [
      'an unsupported layout version',
      fixture('mdfe-proc-authorized.xml').replace(
        '<mdfeProc xmlns="http://www.portalfiscal.inf.br/mdfe" versao="3.00">',
        '<mdfeProc xmlns="http://www.portalfiscal.inf.br/mdfe" versao="4.00">',
      ),
      'unsupported-version',
    ],
    [
      'a document without infMDFe',
      '<mdfeProc xmlns="http://www.portalfiscal.inf.br/mdfe" versao="3.00"><MDFe/></mdfeProc>',
      'missing-field',
    ],
    ['an empty string', '', 'not-xml'],
  ])('refuses %s', (_name, xml, code) => {
    expect(() => parseMDFeXml(xml)).toThrow(MDFeParseError);
    expect(() => parseMDFeXml(xml)).toThrow(expect.objectContaining({ code }));
  });
});

describe('validateMDFeXml', () => {
  it.each([
    ['mdfe-proc-authorized.xml', 'procMDFe_v3.00.xsd'],
    ['mdfe-event-closure.xml', 'procEventoMDFe_v3.00.xsd'],
    ['mdfe-event-cancellation.xml', 'procEventoMDFe_v3.00.xsd'],
  ])('validates %s against the selected layout', (name, schemaFile) => {
    const result = validateMDFeXml(fixture(name));

    expect(result.schemaFile).toBe(schemaFile);
    expect(result.classification).toBe('valid');
    expect(result.errors).toEqual([]);
  });

  it('reports schema errors of an invalid document', () => {
    const result = validateMDFeXml(
      fixture('mdfe-proc-authorized.xml').replace(/<tot>[\s\S]*<\/tot>/u, ''),
    );

    expect(result.classification).toBe('invalid');
    expect(result.errors.join(' ')).toContain('tot');
  });

  it('does not guess a schema for an unsupported root or version', () => {
    expect(
      validateMDFeXml('<nfeProc xmlns="http://www.portalfiscal.inf.br/nfe"/>'),
    ).toMatchObject({
      classification: 'schema-not-found',
      available: false,
    });
    expect(
      validateMDFeXml(
        fixture('mdfe-proc-authorized.xml').replace(
          'versao="3.00">',
          'versao="4.00">',
        ),
      ),
    ).toMatchObject({ classification: 'schema-not-found' });
  });
});
