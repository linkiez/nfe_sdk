import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

import * as publicApi from '../../src/index';

function loadNFeContingencyFixture(relativePath: string): string {
  return readFileSync(
    resolve(process.cwd(), 'tests/fixtures/nfe', relativePath),
    'utf8',
  );
}

type QueryNFeServiceStatus = (input: {
  environment: 'production';
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
  timeoutMs: number;
}) => Promise<{
  applicationStatusCode?: string;
  applicationStatusMessage?: string;
  classification: string;
  transportOutcome: {
    classification: string;
  };
}>;

describe('queryNFeServiceStatus contingency integration', () => {
  it('classifies SVC-AN operational unavailability as unavailable in production', async () => {
    const queryNFeServiceStatus = (publicApi as Record<string, unknown>)
      .queryNFeServiceStatus as QueryNFeServiceStatus | undefined;
    const responseXml = loadNFeContingencyFixture('svc-an-status-response.xml');

    const outcome = await queryNFeServiceStatus?.({
      environment: 'production',
      requestExecutor: async () => ({
        headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
        responseXml,
        status: 200,
      }),
      timeoutMs: 5000,
    });

    expect(outcome?.classification).toBe('unavailable');
    expect(outcome?.applicationStatusCode).toBe('108');
    expect(outcome?.applicationStatusMessage).toContain('Servico paralisado');
    expect(outcome?.transportOutcome.classification).toBe('unavailable');
  });

  it('checks production SVC-AN status before sending exactly one SVC authorization', async () => {
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | ((input: {
          contingency: { mode: 'svc-an' };
          documents: {
            kind: 'single-document';
            payload: {
              documentId: string;
              environment: 'production';
              payload: { cUF: string; tpEmis: string };
              version: '4.00';
            };
          };
          environment: 'production';
          requestExecutor: (request: {
            endpointUrl: string;
            requestXml: string;
            service: string;
          }) => Promise<{
            headers: Readonly<Record<string, string>>;
            responseXml: string;
            status: number;
          }>;
          signingContext: object;
        }) => Promise<{
          classification: string;
          contingencyState?: string;
          executionMode?: string;
        }>)
      | undefined;
    const requests: Array<{
      endpointUrl: string;
      requestXml: string;
      service: string;
    }> = [];
    const outcome = await authorizeNFe?.({
      contingency: { mode: 'svc-an' },
      documents: {
        kind: 'single-document',
        payload: {
          documentId: `35${'0'.repeat(42)}`,
          environment: 'production',
          payload: { cUF: '35', tpEmis: '1' },
          version: '4.00',
        },
      },
      environment: 'production',
      requestExecutor: async (request) => {
        requests.push(request);
        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml:
            request.service === 'nfe-status-service'
              ? '<retConsStatServ><tpAmb>1</tpAmb><cStat>107</cStat><xMotivo>Servico em Operacao</xMotivo></retConsStatServ>'
              : '<retEnviNFe><tpAmb>1</tpAmb><cStat>104</cStat><protNFe><infProt><tpAmb>1</tpAmb><cStat>100</cStat><nProt>135260000000001</nProt></infProt></protNFe></retEnviNFe>',
          status: 200,
        };
      },
      signingContext: {},
    });

    expect(requests.map(({ service }) => service)).toEqual([
      'nfe-status-service',
      'nfe-authorization',
    ]);
    expect(requests[0]?.endpointUrl).toContain('sefazvirtual.fazenda.gov.br');
    expect(requests[1]?.endpointUrl).toContain('sefazvirtual.fazenda.gov.br');
    expect(requests[1]?.requestXml).toContain('<tpEmis>6</tpEmis>');
    expect(outcome).toMatchObject({
      classification: 'authorized',
      contingencyState: 'activation-verified',
      executionMode: 'svc-an',
    });
  });

  it.each([
    {
      name: 'deactivation pending status 113',
      responseXml:
        '<retConsStatServ><tpAmb>1</tpAmb><cStat>113</cStat><xMotivo>Desativacao pendente</xMotivo></retConsStatServ>',
    },
    {
      name: 'disabled status 114',
      responseXml:
        '<retConsStatServ><tpAmb>1</tpAmb><cStat>114</cStat><xMotivo>Desativado</xMotivo></retConsStatServ>',
    },
    {
      name: 'unknown status',
      responseXml:
        '<retConsStatServ><tpAmb>1</tpAmb><cStat>999</cStat><xMotivo>Desconhecido</xMotivo></retConsStatServ>',
    },
    {
      name: 'missing status',
      responseXml:
        '<retConsStatServ><tpAmb>1</tpAmb><xMotivo>Sem status</xMotivo></retConsStatServ>',
    },
    {
      name: 'wrong response environment',
      responseXml:
        '<retConsStatServ><tpAmb>2</tpAmb><cStat>107</cStat><xMotivo>Homologacao</xMotivo></retConsStatServ>',
    },
  ])('does not authorize after $name', async ({ responseXml }) => {
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | ((input: {
          contingency: { mode: 'svc-an' };
          documents: {
            kind: 'single-document';
            payload: {
              documentId: string;
              environment: 'production';
              payload: { cUF: string; tpEmis: string };
              version: '4.00';
            };
          };
          environment: 'production';
          requestExecutor: (request: { service: string }) => Promise<{
            headers: Readonly<Record<string, string>>;
            responseXml: string;
            status: number;
          }>;
          signingContext: object;
        }) => Promise<{ classification: string }>)
      | undefined;
    const requests: string[] = [];

    const outcome = await authorizeNFe?.({
      contingency: { mode: 'svc-an' },
      documents: {
        kind: 'single-document',
        payload: {
          documentId: `35${'0'.repeat(42)}`,
          environment: 'production',
          payload: { cUF: '35', tpEmis: '1' },
          version: '4.00',
        },
      },
      environment: 'production',
      requestExecutor: async ({ service }) => {
        requests.push(service);
        return {
          headers: { 'content-type': 'application/soap+xml; charset=utf-8' },
          responseXml,
          status: 200,
        };
      },
      signingContext: {},
    });

    expect(outcome?.classification).toBe('contingency-boundary');
    expect(requests).toEqual(['nfe-status-service']);
  });

  it('blocks SVC authorization when the activation-status transport fails', async () => {
    const authorizeNFe = (publicApi as Record<string, unknown>).authorizeNFe as
      | ((input: {
          contingency: { mode: 'svc-an' };
          documents: {
            kind: 'single-document';
            payload: {
              documentId: string;
              environment: 'production';
              payload: { cUF: string; tpEmis: string };
              version: '4.00';
            };
          };
          environment: 'production';
          requestExecutor: (request: { service: string }) => Promise<never>;
          signingContext: object;
        }) => Promise<{ classification: string }>)
      | undefined;
    const requests: string[] = [];

    const outcome = await authorizeNFe?.({
      contingency: { mode: 'svc-an' },
      documents: {
        kind: 'single-document',
        payload: {
          documentId: `35${'0'.repeat(42)}`,
          environment: 'production',
          payload: { cUF: '35', tpEmis: '1' },
          version: '4.00',
        },
      },
      environment: 'production',
      requestExecutor: async ({ service }) => {
        requests.push(service);
        throw new Error('activation status unavailable');
      },
      signingContext: {},
    });

    expect(outcome?.classification).toBe('contingency-boundary');
    expect(requests).toEqual(['nfe-status-service']);
  });
});
