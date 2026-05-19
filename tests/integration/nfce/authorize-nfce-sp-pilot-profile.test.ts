import * as publicApi from '../../../src/index';
import type { NFCeAuthorizationOutcome } from '../../../src/canonical/nfce/contracts';

import { expectNFCeAuthorizedOutcome } from '../../config/nfce-assertions';
import {
  expectSoapEnvelopeToContainBodyElement,
  expectSoapEnvelopeToContainStatusCode,
} from '../../config/soap-transport-assertions';
import {
  type FixtureNFCeAuthorizationRequest,
  loadNFCeJsonFixture,
  loadNFCeTextFixture,
} from '../../fixtures/nfce/build-nfce-fixtures';
import { createTestA1FixtureSource } from '../../fixtures/signing/test-a1-fixture';

type SPPilotProfileAuthorizationRequest = Omit<
  FixtureNFCeAuthorizationRequest,
  'document' | 'environment'
> & {
  document: {
    documentId: string;
    environment: 'homologation';
    version: '4.00';
  };
  environment: 'homologation';
};

type AuthorizeNFCe = (input: {
  document: {
    documentId: string;
    environment: 'homologation';
    version: '4.00';
  };
  environment: 'homologation';
  requestExecutor: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: 'nfce-authorization-sp';
    timeoutMs: number;
  }) => Promise<{
    headers: Readonly<Record<string, string>>;
    responseXml: string;
    status: number;
  }>;
  signingContext: unknown;
  timeoutMs: number;
}) => Promise<NFCeAuthorizationOutcome>;

describe('authorizeNFCe SP pilot integration', () => {
  it('routes a supported SP NFC-e through the pilot profile automatically', async () => {
    const fixtureSource = createTestA1FixtureSource();
    const createSigningContext = (publicApi as Record<string, unknown>)
      .createSigningContext as
      | ((input: {
          passphrase: string;
          source: { contentBase64: string; type: 'in-memory-content' };
        }) => Promise<unknown>)
      | undefined;
    const authorizeNFCe = (publicApi as Record<string, unknown>).authorizeNFCe as
      | AuthorizeNFCe
      | undefined;
    const input = loadNFCeJsonFixture<SPPilotProfileAuthorizationRequest>(
      'sp-pilot-profile-input.json',
    );
    const responseXml = loadNFCeTextFixture(
      'sp-pilot-profile-response-authorized.xml',
    );
    const signingContext = await createSigningContext?.({
      passphrase: fixtureSource.passphrase,
      source: {
        contentBase64: fixtureSource.certificateBase64,
        type: 'in-memory-content',
      },
    });

    let capturedEndpointUrl = '';
    let capturedRequestEnvelopeXml = '';
    let capturedService = '';

    const outcome = await authorizeNFCe?.({
      ...input,
      requestExecutor: async ({ endpointUrl, requestXml, service }) => {
        capturedEndpointUrl = endpointUrl;
        capturedRequestEnvelopeXml = requestXml;
        capturedService = service;

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml,
          status: 200,
        };
      },
      signingContext,
      timeoutMs: 5000,
    });

    expectNFCeAuthorizedOutcome(outcome!, '135190000000001');
    expect(outcome?.transportOutcome?.classification).toBe('success');
    expect(outcome?.transportOutcome?.evidence.endpointUrl).toBe(capturedEndpointUrl);
    expect(outcome?.transportOutcome?.service).toBe('nfce-authorization-sp');
    expect(capturedEndpointUrl).toBeTruthy();
    expect(capturedService).toBe('nfce-authorization-sp');
    expect(capturedRequestEnvelopeXml).toContain('enviNFe');
    expectSoapEnvelopeToContainBodyElement(capturedRequestEnvelopeXml, 'enviNFe');
    expectSoapEnvelopeToContainStatusCode(
      outcome?.transportOutcome?.evidence.responseEnvelopeXml ?? '',
      '100',
    );
  });
});