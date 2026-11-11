import { createServer, type Server } from 'node:https';
import type { AddressInfo } from 'node:net';
import { createMutualTlsRequestExecutor } from '../../src/index';
import { createMutualTlsFixture } from '../fixtures/transport/mutual-tls-fixture';

type Seen = {
  clientCommonName?: string;
  protocol?: string | null;
  soapAction?: string;
  body: string;
};

const fixture = createMutualTlsFixture();

async function startServer(options: { delayMs?: number } = {}) {
  const seen: Seen[] = [];
  const server: Server = createServer(
    {
      ca: [fixture.caPem],
      cert: fixture.serverCertPem,
      key: fixture.serverKeyPem,
      minVersion: 'TLSv1.2',
      rejectUnauthorized: true,
      requestCert: true,
    },
    (request, response) => {
      const chunks: Buffer[] = [];
      request.on('data', (chunk: Buffer) => chunks.push(chunk));
      request.on('end', () => {
        const peer = request.socket as unknown as {
          getPeerCertificate(): { subject?: { CN?: string } };
          getProtocol(): string | null;
        };
        seen.push({
          body: Buffer.concat(chunks).toString('utf8'),
          clientCommonName: peer.getPeerCertificate().subject?.CN,
          protocol: peer.getProtocol(),
          soapAction: request.headers.soapaction as string | undefined,
        });
        setTimeout(() => {
          response.writeHead(200, { 'content-type': 'application/soap+xml' });
          response.end('<soap:Envelope><ok/></soap:Envelope>');
        }, options.delayMs ?? 0);
      });
    },
  );

  await new Promise<void>((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address() as AddressInfo;

  return {
    close: () =>
      new Promise<void>(
        (resolve) => server.closeAllConnections?.() ?? resolve(),
      ).then(
        () => new Promise<void>((resolve) => server.close(() => resolve())),
      ),
    endpointUrl: `https://localhost:${port}/ws`,
    seen,
  };
}

const baseInput = {
  headers: { 'content-type': 'application/soap+xml', soapaction: 'urn:test' },
  requestXml: '<soap:Envelope><req/></soap:Envelope>',
  service: 'nfe-status-service' as const,
  timeoutMs: 5000,
};

describe('createMutualTlsRequestExecutor', () => {
  jest.setTimeout(60_000);

  it('presents the client certificate, uses TLS >= 1.2 and returns status, headers and body', async () => {
    const server = await startServer();
    try {
      const execute = createMutualTlsRequestExecutor({
        ca: fixture.caPem,
        passphrase: fixture.clientPassphrase,
        pfx: fixture.clientPfx,
      });

      const response = await execute({
        ...baseInput,
        endpointUrl: server.endpointUrl,
      });

      expect(response.status).toBe(200);
      expect(response.responseXml).toBe('<soap:Envelope><ok/></soap:Envelope>');
      expect(response.headers['content-type']).toBe('application/soap+xml');
      expect(server.seen).toHaveLength(1);
      expect(server.seen[0].clientCommonName).toBe('synthetic client A1');
      expect(['TLSv1.2', 'TLSv1.3']).toContain(server.seen[0].protocol);
      expect(server.seen[0].body).toBe(baseInput.requestXml);
      expect(server.seen[0].soapAction).toBe('urn:test');
    } finally {
      await server.close();
    }
  });

  it('fails the handshake as a transport error without leaking secrets', async () => {
    const server = await startServer();
    try {
      const execute = createMutualTlsRequestExecutor({
        ca: fixture.caPem,
        passphrase: fixture.clientPassphrase,
        pfx: fixture.otherClientPfx,
      });

      const failure = await execute({
        ...baseInput,
        endpointUrl: server.endpointUrl,
      }).catch((error: unknown) => error);

      expect(failure).toBeInstanceOf(Error);
      const text = `${(failure as Error).name} ${(failure as Error).message}`;
      expect(text).not.toContain(fixture.clientPassphrase);
      expect(text).not.toContain(
        fixture.clientPfx.toString('base64').slice(0, 40),
      );
      expect(server.seen).toHaveLength(0);
    } finally {
      await server.close();
    }
  });

  it('rejects a server certificate that the configured CA does not vouch for', async () => {
    const server = await startServer();
    try {
      const execute = createMutualTlsRequestExecutor({
        passphrase: fixture.clientPassphrase,
        pfx: fixture.clientPfx,
      });

      await expect(
        execute({ ...baseInput, endpointUrl: server.endpointUrl }),
      ).rejects.toBeInstanceOf(Error);
      expect(server.seen).toHaveLength(0);
    } finally {
      await server.close();
    }
  });

  it('aborts with AbortError when the response exceeds the timeout', async () => {
    const server = await startServer({ delayMs: 1500 });
    try {
      const execute = createMutualTlsRequestExecutor({
        ca: fixture.caPem,
        passphrase: fixture.clientPassphrase,
        pfx: fixture.clientPfx,
      });

      const failure = await execute({
        ...baseInput,
        endpointUrl: server.endpointUrl,
        timeoutMs: 200,
      }).catch((error: unknown) => error);

      expect((failure as Error).name).toBe('AbortError');
    } finally {
      await server.close();
    }
  });

  it('uses the configured timeout as an upper bound and the input timeout otherwise', async () => {
    const server = await startServer({ delayMs: 600 });
    try {
      const execute = createMutualTlsRequestExecutor({
        ca: fixture.caPem,
        passphrase: fixture.clientPassphrase,
        pfx: fixture.clientPfx,
        timeoutMs: 150,
      });

      const failure = await execute({
        ...baseInput,
        endpointUrl: server.endpointUrl,
        timeoutMs: 5000,
      }).catch((error: unknown) => error);

      expect((failure as Error).name).toBe('AbortError');
    } finally {
      await server.close();
    }
  });

  it('rejects an invalid PKCS#12 or passphrase before any network call', () => {
    expect(() =>
      createMutualTlsRequestExecutor({
        passphrase: 'x',
        pfx: Buffer.from('not a pfx'),
      }),
    ).toThrow(/PKCS#12|certificado/i);
    expect(() =>
      createMutualTlsRequestExecutor({
        passphrase: 'wrong',
        pfx: fixture.clientPfx,
      }),
    ).toThrow();
  });

  it('refuses non-https endpoints', async () => {
    const execute = createMutualTlsRequestExecutor({
      passphrase: fixture.clientPassphrase,
      pfx: fixture.clientPfx,
    });

    await expect(
      execute({ ...baseInput, endpointUrl: 'http://localhost:1/ws' }),
    ).rejects.toThrow(/https/i);
  });
});
