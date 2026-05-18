import * as publicApi from '../../src/index';
import {
  expectSoapEnvelopeToContainBodyElement,
  expectSoapEnvelopeToContainStatusCode,
} from '../config/soap-transport-assertions';
import { loadTransportTextFixture } from '../fixtures/transport/load-transport-fixture';

type ExecuteNFeSoapService = (input: {
  environment: 'homologation';
  payloadXml: string;
  requestExecutor: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: 'nfe-authorization';
    timeoutMs: number;
  }) => Promise<{
    headers: Readonly<Record<string, string>>;
    responseXml: string;
    status: number;
  }>;
  service: 'nfe-authorization';
  timeoutMs: number;
}) => Promise<{
  applicationStatusCode?: string;
  classification: string;
  evidence: {
    endpointUrl: string;
    requestEnvelopeXml: string;
    responseEnvelopeXml?: string;
  };
}>;

describe('executeNFeSoapService authorization integration', () => {
  it('executes the supported homologation authorization flow', async () => {
    const executeNFeSoapService = (publicApi as Record<string, unknown>)
      .executeNFeSoapService as ExecuteNFeSoapService | undefined;
    const payloadXml = loadTransportTextFixture(
      'nfe-authorization/request.xml',
    );
    const responseXml = loadTransportTextFixture(
      'nfe-authorization/response-success.xml',
    );

    let capturedRequestEnvelopeXml = '';

    expect(typeof executeNFeSoapService).toBe('function');

    const outcome = await executeNFeSoapService?.({
      environment: 'homologation',
      payloadXml,
      requestExecutor: async ({ requestXml }) => {
        capturedRequestEnvelopeXml = requestXml;

        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml,
          status: 200,
        };
      },
      service: 'nfe-authorization',
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('success');
    expect(outcome?.applicationStatusCode).toBe('103');
    expect(outcome?.evidence.endpointUrl).toBeTruthy();
    expect(outcome?.evidence.requestEnvelopeXml).toBe(
      capturedRequestEnvelopeXml,
    );
    expectSoapEnvelopeToContainBodyElement(
      outcome?.evidence.requestEnvelopeXml ?? '',
      'enviNFe',
    );
    expectSoapEnvelopeToContainStatusCode(
      outcome?.evidence.responseEnvelopeXml ?? '',
      '103',
    );
  });
});
