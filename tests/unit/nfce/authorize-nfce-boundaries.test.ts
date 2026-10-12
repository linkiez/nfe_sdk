import { createSigningContext } from '../../../src/index';
import { authorizeNFCe } from '../../../src/canonical/nfce/authorize-nfce';
import { getNFCeAuthorizationClassifications } from '../../../src/canonical/nfce/contracts';

import { buildFixtureNFCeAuthorizationRequest } from '../../fixtures/nfce/build-nfce-fixtures';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';

const PRODUCTION_ACCESS_KEY = '35260512345678000123650020000004561876543219';
const PRODUCTION_UNSIGNED_XML = `<NFe xmlns="http://www.portalfiscal.inf.br/nfe"><infNFe Id="NFe${PRODUCTION_ACCESS_KEY}" versao="4.00"><ide><cUF>35</cUF><cNF>87654321</cNF><mod>65</mod><serie>2</serie><nNF>456</nNF><dhEmi>2026-05-18T10:00:00-03:00</dhEmi><tpEmis>1</tpEmis><cDV>9</cDV><tpAmb>1</tpAmb></ide><emit><CNPJ>12345678000123</CNPJ></emit></infNFe></NFe>`;

describe('authorizeNFCe boundaries', () => {
  it('publishes both unsupported-state and unsupported-scope in the NFC-e taxonomy', () => {
    expect(getNFCeAuthorizationClassifications()).toEqual(
      expect.arrayContaining(['unsupported-scope', 'unsupported-state']),
    );
  });

  it('returns unsupported-state before transport for a non-pilot UF', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const signingContext = await createSigningContext({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    let transportWasCalled = false;

    const outcome = await authorizeNFCe({
      ...buildFixtureNFCeAuthorizationRequest({
        document: {
          documentId: '33190500000000000000550010000000011000000010',
          environment: 'homologation',
          version: '4.00',
        },
      }),
      requestExecutor: async () => {
        transportWasCalled = true;

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml: '<unused />',
          status: 200,
        };
      },
      signingContext,
    });

    expect(outcome.acceptedForTransport).toBe(false);
    expect(outcome.classification).toBe('unsupported-state');
    expect(outcome.coverageBoundary).toEqual({
      classification: 'unsupported-state',
      code: 'nfce-unsupported-state',
      message:
        'authorizeNFCe currently supports only the SP and PR promoted cohort for homologation NFC-e operations.',
      retryable: false,
      uf: 'RJ',
    });
    expect(outcome.validationFailures).toEqual([]);
    expect(transportWasCalled).toBe(false);
  });

  it.each([
    {
      description: 'a non-SP issuer',
      documentId: '41190500000000000000650010000000011000000010',
      environment: 'production',
      requestEnvironment: 'production',
      expectedMessage: /production.*SP only/iu,
    },
    {
      description: 'a model 55 document',
      documentId: '35190500000000000000550010000000011000000010',
      environment: 'production',
      requestEnvironment: 'production',
      expectedMessage: /model "65"/u,
    },
    {
      description: 'a production request with a homologation access key',
      documentId: '35260512345678000123650010000001231123456781',
      environment: 'homologation',
      requestEnvironment: 'production',
      expectedMessage: /environment.*match/iu,
    },
  ])('rejects $description before transport', async (scenario) => {
    const fixtureSource = createTestA1FixtureSource();
    const signingContext = await createSigningContext({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });
    let transportWasCalled = false;

    await expect(
      authorizeNFCe({
        document: {
          documentId: scenario.documentId,
          environment: scenario.environment,
          version: '4.00',
        },
        environment: scenario.requestEnvironment,
        requestExecutor: async () => {
          transportWasCalled = true;
          return {
            headers: {},
            responseXml: '<unused />',
            status: 200,
          };
        },
        signingContext,
        csc: { cscId: '000002', cscToken: 'test-token' },
      }),
    ).rejects.toThrow(scenario.expectedMessage);

    expect(transportWasCalled).toBe(false);
  });

  it('requires an injected executor and CSC for production before transport', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const signingContext = await createSigningContext({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });
    const document = {
      documentId: '35260512345678000123650020000004561876543219',
      environment: 'production',
      version: '4.00',
    } as const;

    await expect(
      authorizeNFCe({ document, environment: 'production', signingContext }),
    ).rejects.toThrow(/mTLS-capable requestExecutor/iu);

    await expect(
      authorizeNFCe({
        document,
        environment: 'production',
        signingContext,
        requestExecutor: async () => ({
          headers: {},
          responseXml: '<unused />',
          status: 200,
        }),
      }),
    ).rejects.toThrow(/CSC/u);
  });

  it('requires signing context for production before transport', async () => {
    let transportWasCalled = false;

    await expect(
      authorizeNFCe({
        document: {
          documentId: '35260512345678000123650020000004561876543219',
          environment: 'production',
          version: '4.00',
        },
        environment: 'production',
        requestExecutor: async () => {
          transportWasCalled = true;
          return {
            headers: {},
            responseXml: '<unused />',
            status: 200,
          };
        },
        csc: { cscId: '000002', cscToken: 'test-token' },
      } as unknown as Parameters<typeof authorizeNFCe>[0]),
    ).rejects.toThrow(/signingContext/u);

    expect(transportWasCalled).toBe(false);
  });

  it('requires unsigned fiscal XML before production transport', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const signingContext = await createSigningContext({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });
    let transportWasCalled = false;

    await expect(
      authorizeNFCe({
        document: {
          documentId: '35260512345678000123650020000004561876543219',
          environment: 'production',
          version: '4.00',
        },
        environment: 'production',
        signingContext,
        requestExecutor: async () => {
          transportWasCalled = true;
          return { headers: {}, responseXml: '<unused />', status: 200 };
        },
        csc: { cscId: '000002', cscToken: 'test-token' },
      }),
    ).rejects.toThrow(/unsignedXml/u);

    expect(transportWasCalled).toBe(false);
  });

  it.each([
    {
      unsignedXml: PRODUCTION_UNSIGNED_XML.replace(
        `NFe${PRODUCTION_ACCESS_KEY}`,
        'NFe35260512345678000123650020000004561876543218',
      ),
      expectedMessage: /requested NFC-e access key/u,
    },
    {
      unsignedXml: PRODUCTION_UNSIGNED_XML.replace(
        '<CNPJ>12345678000123</CNPJ>',
        '<CNPJ>12345678000124</CNPJ>',
      ),
      expectedMessage: /issuer identifier.*access key/iu,
    },
    {
      unsignedXml: PRODUCTION_UNSIGNED_XML.replace(
        '<dhEmi>2026-05-',
        '<dhEmi>2026-06-',
      ),
      expectedMessage: /fiscal identification fields.*access key/iu,
    },
    {
      unsignedXml: PRODUCTION_UNSIGNED_XML.replace(
        '<serie>2</serie>',
        '<serie>3</serie>',
      ),
      expectedMessage: /fiscal identification fields.*access key/iu,
    },
    {
      unsignedXml: PRODUCTION_UNSIGNED_XML.replace(
        '<nNF>456</nNF>',
        '<nNF>457</nNF>',
      ),
      expectedMessage: /fiscal identification fields.*access key/iu,
    },
    {
      unsignedXml: PRODUCTION_UNSIGNED_XML.replace(
        '<tpEmis>1</tpEmis>',
        '<tpEmis>2</tpEmis>',
      ),
      expectedMessage: /fiscal identification fields.*access key/iu,
    },
    {
      unsignedXml: PRODUCTION_UNSIGNED_XML.replace(
        '<cNF>87654321</cNF>',
        '<cNF>87654320</cNF>',
      ),
      expectedMessage: /fiscal identification fields.*access key/iu,
    },
    {
      unsignedXml: PRODUCTION_UNSIGNED_XML.replace(
        '<cDV>9</cDV>',
        '<cDV>8</cDV>',
      ),
      expectedMessage: /fiscal identification fields.*access key/iu,
    },
    {
      unsignedXml: PRODUCTION_UNSIGNED_XML.replace(
        '<cUF>35</cUF>',
        '<cUF>41</cUF>',
      ),
      expectedMessage: /SP model 65/u,
    },
    {
      unsignedXml: PRODUCTION_UNSIGNED_XML.replace(
        '<mod>65</mod>',
        '<mod>55</mod>',
      ),
      expectedMessage: /SP model 65/u,
    },
    {
      unsignedXml: PRODUCTION_UNSIGNED_XML.replace(
        '<tpAmb>1</tpAmb>',
        '<tpAmb>2</tpAmb>',
      ),
      expectedMessage: /production tpAmb/u,
    },
  ])(
    'rejects production XML identity mismatch before transport',
    async ({ unsignedXml, expectedMessage }) => {
      const fixtureSource = createTestA1FixtureSource();
      const signingContext = await createSigningContext({
        passphrase: fixtureSource.passphrase,
        source: {
          contentBase64: fixtureSource.certificateBase64,
          type: 'in-memory-content',
        },
      });
      let transportWasCalled = false;

      await expect(
        authorizeNFCe({
          document: {
            documentId: PRODUCTION_ACCESS_KEY,
            environment: 'production',
            version: '4.00',
          },
          environment: 'production',
          signingContext,
          requestExecutor: async () => {
            transportWasCalled = true;
            return { headers: {}, responseXml: '<unused />', status: 200 };
          },
          unsignedXml,
          csc: { cscId: '000002', cscToken: 'test-token' },
        }),
      ).rejects.toThrow(expectedMessage);

      expect(transportWasCalled).toBe(false);
    },
  );
});
