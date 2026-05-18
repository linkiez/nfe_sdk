import * as publicApi from '../../src/index';

type ExecuteNFeSoapService = (input: {
  environment: 'homologation';
  payloadXml: string;
  requestExecutor: (input: {
    endpointUrl: string;
    headers: Readonly<Record<string, string>>;
    requestXml: string;
    service: 'nfe-status-service';
    timeoutMs: number;
  }) => Promise<{
    headers: Readonly<Record<string, string>>;
    responseXml: string;
    status: number;
  }>;
  service: 'nfe-status-service';
  timeoutMs: number;
}) => Promise<{
  applicationStatusCode?: string;
  classification: string;
  failureReason?: string;
}>;

describe('executeNFeSoapService failure integration', () => {
  it('classifies timeout, unavailable, and protocol-error outcomes distinctly', async () => {
    const executeNFeSoapService = (publicApi as Record<string, unknown>)
      .executeNFeSoapService as ExecuteNFeSoapService | undefined;

    expect(typeof executeNFeSoapService).toBe('function');

    const timeoutError = new Error('The operation was aborted.');
    timeoutError.name = 'AbortError';

    await expect(
      executeNFeSoapService?.({
        environment: 'homologation',
        payloadXml: '<consStatServNFe versao="4.00" />',
        requestExecutor: async () => {
          throw timeoutError;
        },
        service: 'nfe-status-service',
        timeoutMs: 10,
      }),
    ).resolves.toMatchObject({ classification: 'timeout' });

    await expect(
      executeNFeSoapService?.({
        environment: 'homologation',
        payloadXml: '<consStatServNFe versao="4.00" />',
        requestExecutor: async () => ({
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml:
            '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><retConsStatServ><cStat>108</cStat><xMotivo>Servico Paralisado Momentaneamente</xMotivo></retConsStatServ></soap:Body></soap:Envelope>',
          status: 200,
        }),
        service: 'nfe-status-service',
        timeoutMs: 5000,
      }),
    ).resolves.toMatchObject({
      applicationStatusCode: '108',
      classification: 'unavailable',
    });

    await expect(
      executeNFeSoapService?.({
        environment: 'homologation',
        payloadXml: '<consStatServNFe versao="4.00" />',
        requestExecutor: async () => ({
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml:
            '<soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope"><soap:Body><unexpected /></soap:Body></soap:Envelope>',
          status: 200,
        }),
        service: 'nfe-status-service',
        timeoutMs: 5000,
      }),
    ).resolves.toMatchObject({ classification: 'protocol-error' });
  });
});
