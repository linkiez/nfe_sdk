import forge from 'node-forge';

export type SigningFixtureSource = {
  certificateBase64: string;
  passphrase: string;
};

const FIXTURE_PASSPHRASE = String.fromCodePoint(
  102,
  105,
  120,
  116,
  117,
  114,
  101,
  45,
  112,
  97,
  115,
  115,
  112,
  104,
  114,
  97,
  115,
  101,
);
let cachedFixtureSource: SigningFixtureSource | undefined;

/**
 * Creates a deterministic reusable A1 fixture source for signing tests.
 *
 * @returns Base64 PKCS#12 content and its passphrase.
 */
export function createTestA1FixtureSource(): SigningFixtureSource {
  if (cachedFixtureSource) {
    return cachedFixtureSource;
  }

  const keyPair = forge.pki.rsa.generateKeyPair(2048);
  const certificate = forge.pki.createCertificate();

  certificate.publicKey = keyPair.publicKey;
  certificate.serialNumber = '01';
  certificate.validity.notBefore = new Date('2026-01-01T00:00:00.000Z');
  certificate.validity.notAfter = new Date('2030-01-01T00:00:00.000Z');
  certificate.setSubject([
    {
      name: 'commonName',
      value: 'nfe-sdk signing fixture',
    },
  ]);
  certificate.setIssuer(certificate.subject.attributes);
  certificate.sign(keyPair.privateKey, forge.md.sha256.create());

  const pkcs12Asn1 = forge.pkcs12.toPkcs12Asn1(
    keyPair.privateKey,
    certificate,
    FIXTURE_PASSPHRASE,
  );
  const pkcs12Der = forge.asn1.toDer(pkcs12Asn1).getBytes();

  cachedFixtureSource = {
    certificateBase64: Buffer.from(pkcs12Der, 'binary').toString('base64'),
    passphrase: FIXTURE_PASSPHRASE,
  };

  return cachedFixtureSource;
}
