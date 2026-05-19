import {
  buildEPECDetailXml,
  buildEPECEnvelopeXml,
  EPEC_EVENT_CODE,
} from '../../../../../src/canonical/nfe/epec/epec-builder';
import { resolveEPECSVCTarget } from '../../../../../src/canonical/nfe/epec/epec-svc-routing';
import type { EPECEventInput } from '../../../../../src/canonical/nfe/epec/contracts';

const SAMPLE_CH_NFE = '35260112345678000195550010000000011000000014';

function makeInput(overrides: Partial<EPECEventInput> = {}): EPECEventInput {
  return {
    chNFe: SAMPLE_CH_NFE,
    issuerCNPJ: '12345678000195',
    recipientDocument: '98765432000100',
    totalValue: '1500.00',
    emissionDateTime: '2026-01-01T10:00:00-03:00',
    issuerUF: '35',
    signingContext: {} as EPECEventInput['signingContext'],
    requestExecutor: {} as EPECEventInput['requestExecutor'],
    ...overrides,
  };
}

describe('EPEC SVC routing', () => {
  it('routes SC (42) to SVC-RS', () => {
    expect(resolveEPECSVCTarget('42')).toBe('SVC-RS');
  });

  it('routes SP (35) to SVC-AN', () => {
    expect(resolveEPECSVCTarget('35')).toBe('SVC-AN');
  });

  it('routes AC (12) to SVC-AN', () => {
    expect(resolveEPECSVCTarget('12')).toBe('SVC-AN');
  });

  it('routes AM (13) to SVC-AN', () => {
    expect(resolveEPECSVCTarget('13')).toBe('SVC-AN');
  });

  it('routes RS (43) to SVC-AN (RS has own autorizador but EPEC goes to SVC-AN)', () => {
    expect(resolveEPECSVCTarget('43')).toBe('SVC-AN');
  });
});

describe('EPEC event code', () => {
  it('exports the correct EPEC event code', () => {
    expect(EPEC_EVENT_CODE).toBe('110140');
  });
});

describe('buildEPECDetailXml', () => {
  it('includes descEvento EPEC', () => {
    const xml = buildEPECDetailXml(makeInput());
    expect(xml).toContain('<descEvento>EPEC</descEvento>');
  });

  it('includes cOrgaoAutor extracted from chNFe (first 2 digits)', () => {
    // SAMPLE_CH_NFE starts with '35' (SP)
    const xml = buildEPECDetailXml(makeInput());
    expect(xml).toContain('<cOrgaoAutor>35</cOrgaoAutor>');
  });

  it('includes CNPJ recipient tag for 14-digit document', () => {
    const xml = buildEPECDetailXml(makeInput());
    expect(xml).toContain('<CNPJ>98765432000100</CNPJ>');
  });

  it('includes CPF recipient tag for 11-digit document', () => {
    const xml = buildEPECDetailXml(
      makeInput({ recipientDocument: '12345678901' }),
    );
    expect(xml).toContain('<CPF>12345678901</CPF>');
  });

  it('includes vNF with totalValue', () => {
    const xml = buildEPECDetailXml(makeInput());
    expect(xml).toContain('<vNF>1500.00</vNF>');
  });

  it('includes vICMS and vST defaults', () => {
    const xml = buildEPECDetailXml(makeInput());
    expect(xml).toContain('<vICMS>0.00</vICMS>');
    expect(xml).toContain('<vST>0.00</vST>');
  });

  it('includes dhEmi with emission date-time', () => {
    const xml = buildEPECDetailXml(makeInput());
    expect(xml).toContain('<dhEmi>2026-01-01T10:00:00-03:00</dhEmi>');
  });
});

describe('buildEPECEnvelopeXml', () => {
  it('wraps in envEvento root element', () => {
    const xml = buildEPECEnvelopeXml(makeInput());
    expect(xml).toMatch(/^<envEvento versao="1\.00">/);
    expect(xml).toContain('</envEvento>');
  });

  it('includes the EPEC event code in tpEvento', () => {
    const xml = buildEPECEnvelopeXml(makeInput());
    expect(xml).toContain(`<tpEvento>${EPEC_EVENT_CODE}</tpEvento>`);
  });

  it('includes the issuer CNPJ in the infEvento', () => {
    const xml = buildEPECEnvelopeXml(makeInput());
    expect(xml).toContain('<CNPJ>12345678000195</CNPJ>');
  });

  it('includes the chNFe in the infEvento element', () => {
    const xml = buildEPECEnvelopeXml(makeInput());
    expect(xml).toContain(`<chNFe>${SAMPLE_CH_NFE}</chNFe>`);
  });

  it('includes the Id attribute with correct format for EPEC', () => {
    const xml = buildEPECEnvelopeXml(makeInput());
    expect(xml).toContain(`ID${EPEC_EVENT_CODE}${SAMPLE_CH_NFE}`);
  });

  it('uses cOrgao 91 for SVC-AN routing', () => {
    const xml = buildEPECEnvelopeXml(makeInput());
    expect(xml).toContain('<cOrgao>91</cOrgao>');
  });

  it('sets tpAmb to 2 for homologation', () => {
    const xml = buildEPECEnvelopeXml(makeInput());
    expect(xml).toContain('<tpAmb>2</tpAmb>');
  });
});
