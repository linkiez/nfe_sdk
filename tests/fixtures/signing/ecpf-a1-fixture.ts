import forge from 'node-forge';

export type ECpfSigningFixtureSource = {
  certificateBase64: string;
  passphrase: string;
};

const FIXTURE_PASSPHRASE = 'ecpf-fixture-passphrase';
let cachedECpfFixtureSource: ECpfSigningFixtureSource | undefined;

/**
 * Creates a deterministic reusable e-CPF A1 fixture source for signing tests.
 * Uses a self-signed certificate with a CPF in the subject CN (e-CPF style).
 *
 * @returns Base64 PKCS#12 content and its passphrase.
 */
export function createTestECpfFixtureSource(): ECpfSigningFixtureSource {
  if (cachedECpfFixtureSource) {
    return cachedECpfFixtureSource;
  }

  const keyPair = forge.pki.rsa.generateKeyPair(2048);
  const certificate = forge.pki.createCertificate();

  certificate.publicKey = keyPair.publicKey;
  certificate.serialNumber = '02';
  certificate.validity.notBefore = new Date('2026-01-01T00:00:00.000Z');
  certificate.validity.notAfter = new Date('2030-01-01T00:00:00.000Z');
  certificate.setSubject([
    {
      name: 'commonName',
      // e-CPF style: name + CPF in CN (common ICP-Brasil pattern)
      value: 'CONTRIBUINTE TESTE:12345678901',
    },
    {
      name: 'organizationName',
      value: 'ICP-Brasil',
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

  cachedECpfFixtureSource = {
    certificateBase64: Buffer.from(pkcs12Der, 'binary').toString('base64'),
    passphrase: FIXTURE_PASSPHRASE,
  };

  return cachedECpfFixtureSource;
}
