import { generateKeyPairSync } from 'node:crypto';
import forge from 'node-forge';

const CLIENT_PASSPHRASE = 'synthetic-client-pass';

export type MutualTlsFixture = {
  readonly caPem: string;
  readonly clientPassphrase: string;
  readonly clientPfx: Buffer;
  readonly otherClientPfx: Buffer;
  readonly serverKeyPem: string;
  readonly serverCertPem: string;
};

type IssuedCertificate = {
  certPem: string;
  keyPem: string;
  keyForge: forge.pki.rsa.PrivateKey;
};

function newKeyPair(): { keyPem: string; publicPem: string } {
  const { privateKey, publicKey } = generateKeyPairSync('rsa', {
    modulusLength: 2048,
    privateKeyEncoding: { format: 'pem', type: 'pkcs8' },
    publicKeyEncoding: { format: 'pem', type: 'spki' },
  });

  return { keyPem: privateKey, publicPem: publicKey };
}

function issue(
  commonName: string,
  issuer:
    | { cert: forge.pki.Certificate; key: forge.pki.rsa.PrivateKey }
    | undefined,
  extensions: object[] = [],
): IssuedCertificate & { cert: forge.pki.Certificate } {
  const { keyPem, publicPem } = newKeyPair();
  const keyForge = forge.pki.privateKeyFromPem(
    keyPem,
  ) as forge.pki.rsa.PrivateKey;
  const cert = forge.pki.createCertificate();

  cert.publicKey = forge.pki.publicKeyFromPem(publicPem);
  cert.serialNumber = String(Math.floor(Math.random() * 1_000_000) + 1);
  cert.validity.notBefore = new Date('2026-01-01T00:00:00.000Z');
  cert.validity.notAfter = new Date('2035-01-01T00:00:00.000Z');
  cert.setSubject([{ name: 'commonName', value: commonName }]);
  cert.setIssuer(
    issuer ? issuer.cert.subject.attributes : cert.subject.attributes,
  );
  cert.setExtensions(extensions);
  cert.sign(issuer?.key ?? keyForge, forge.md.sha256.create());

  return { cert, certPem: forge.pki.certificateToPem(cert), keyForge, keyPem };
}

function toPfx(
  subject: IssuedCertificate & { cert: forge.pki.Certificate },
): Buffer {
  const asn1 = forge.pkcs12.toPkcs12Asn1(
    subject.keyForge,
    subject.cert,
    CLIENT_PASSPHRASE,
  );

  return Buffer.from(forge.asn1.toDer(asn1).getBytes(), 'binary');
}

let cached: MutualTlsFixture | undefined;

/**
 * Builds synthetic certificates for mutual TLS tests: a CA, a server certificate for
 * localhost, a client A1 signed by that CA and a client signed by an unrelated CA.
 * Never use real certificates in tests.
 */
export function createMutualTlsFixture(): MutualTlsFixture {
  if (cached) {
    return cached;
  }

  const ca = issue('synthetic test CA', undefined, [
    { name: 'basicConstraints', cA: true },
    { name: 'keyUsage', keyCertSign: true, cRLSign: true },
  ]);
  const caRef = { cert: ca.cert, key: ca.keyForge };
  const server = issue('localhost', caRef, [
    { name: 'basicConstraints', cA: false },
    {
      name: 'subjectAltName',
      altNames: [
        { type: 2, value: 'localhost' },
        { type: 7, ip: '127.0.0.1' },
      ],
    },
  ]);
  const client = issue('synthetic client A1', caRef, [
    { name: 'basicConstraints', cA: false },
  ]);
  const otherCa = issue('unrelated CA', undefined, [
    { name: 'basicConstraints', cA: true },
  ]);
  const other = issue(
    'unrelated client',
    { cert: otherCa.cert, key: otherCa.keyForge },
    [{ name: 'basicConstraints', cA: false }],
  );

  cached = {
    caPem: ca.certPem,
    clientPassphrase: CLIENT_PASSPHRASE,
    clientPfx: toPfx(client),
    otherClientPfx: toPfx(other),
    serverCertPem: server.certPem,
    serverKeyPem: server.keyPem,
  };

  return cached;
}
