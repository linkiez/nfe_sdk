import { DOMParser, XMLSerializer } from '@xmldom/xmldom';
import { resolve } from 'node:path';

import * as publicApi from '../../src/index';
import type {
  NFeAuthorizationOutcome,
  NFeAuthorizationRequest,
  NFeContingencyMode,
} from '../../src/index';
import { createTestA1FixtureSource } from '../fixtures/signing/test-a1-fixture';

describe('NF-e SP contingency root contract', () => {
  it('exposes explicit contingency modes and additive outcome metadata', () => {
    const mode: NFeContingencyMode = 'svc-an';
    const request: Pick<NFeAuthorizationRequest, 'contingency'> = {
      contingency: { mode },
    };
    const outcome: Pick<
      NFeAuthorizationOutcome,
      'executionMode' | 'contingencyState'
    > = { executionMode: 'normal' };

    expect(publicApi.authorizeNFe).toEqual(expect.any(Function));
    expect(request.contingency?.mode).toBe('svc-an');
    expect(outcome.executionMode).toBe('normal');
  });

  it.each([
    {
      name: 'domestic recipient',
      recipientDocument: '98765432000100',
      recipientTag: 'CNPJ',
    },
    {
      name: 'foreign recipient with XML-sensitive characters',
      recipientDocument: `A<&>"'B`,
      recipientTag: 'idEstrangeiro',
    },
  ])(
    'signs production EPEC for $name and validates the submitted envelope against its XSD',
    async ({ recipientDocument, recipientTag }) => {
      const fixtureSource = createTestA1FixtureSource();
      const signingContext = await publicApi.createSigningContext({
        passphrase: fixtureSource.passphrase,
        source: {
          contentBase64: fixtureSource.certificateBase64,
          type: 'in-memory-content',
        },
      });
      let requestXml = '';

      await publicApi.submitEPECEvent({
        chNFe: '35260112345678000195550010000000011000000014',
        emissionDateTime: '2026-01-01T10:00:00-03:00',
        environment: 'production',
        issuerCNPJ: '12345678000195',
        issuerIE: '123456789012',
        issuerUF: '35',
        recipientDocument,
        recipientUF: 'RJ',
        requestExecutor: async (request) => {
          requestXml = request.requestXml;
          return {
            headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
            responseXml:
              '<retEnvEvento><cStat>128</cStat><retEvento><infEvento><cStat>135</cStat><nProt>135260000000001</nProt></infEvento></retEvento></retEnvEvento>',
            status: 200,
          };
        },
        signingContext,
        totalICMS: '120.00',
        totalICMSST: '15.00',
        totalValue: '1500.00',
        tpNF: '0',
      });

      const requestDocument = new DOMParser().parseFromString(
        requestXml,
        'text/xml',
      );
      const eventEnvelope = requestDocument
        .getElementsByTagName('envEvento')
        .item(0);
      expect(eventEnvelope).not.toBeNull();

      if (!eventEnvelope) {
        throw new Error(
          'The submitted SOAP request did not contain envEvento.',
        );
      }

      const destination = eventEnvelope.getElementsByTagName('dest').item(0);
      expect(
        destination?.getElementsByTagName(recipientTag).item(0)?.textContent,
      ).toBe(recipientDocument);

      const validation = publicApi.validateNFeXsd(
        new XMLSerializer().serializeToString(eventEnvelope),
        {
          schemaFamily: 'envEPEC_v1.00.xsd',
          xsdDir: resolve(process.cwd(), 'xsd/Evento_EPEC_PL_v1.01'),
        },
      );

      expect(validation.errors).toEqual([]);
      expect(validation).toMatchObject({
        available: true,
        classification: 'valid',
      });
    },
  );
});
