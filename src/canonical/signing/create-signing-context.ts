import forge from 'node-forge';

import type { CreateSigningContextInput, SigningContext } from './contracts.js';
import {
  attachSigningRuntimeMaterial,
  SUPPORTED_SIGNATURE_ALGORITHMS,
} from './contracts.js';
import { loadPkcs12FromFile } from './a1-file-source.js';
import { loadPkcs12FromMemory } from './a1-memory-source.js';
import { CreateSigningContextError } from './errors.js';
import {
  isFilePathSigningSource,
  normalizeSigningSourceMetadata,
} from './source-normalization.js';

/**
 * Derives a reusable signing context from supported A1 material.
 *
 * @param input - Certificate source and passphrase used to open the PKCS#12 payload.
 * @returns Public reusable signing context without exposing raw key material.
 * @throws {CreateSigningContextError} When the source or PKCS#12 payload is invalid.
 */
export async function createSigningContext(
  input: CreateSigningContextInput,
): Promise<SigningContext> {
  if (input.passphrase.length === 0) {
    throw new CreateSigningContextError('The A1 passphrase must not be empty.');
  }

  const pkcs12Bytes = isFilePathSigningSource(input.source)
    ? loadPkcs12FromFile(input.source)
    : loadPkcs12FromMemory(input.source);

  const parsedMaterial = extractPkcs12Material(pkcs12Bytes, input.passphrase);
  const signingContext: SigningContext = {
    certificateIdentity: parsedMaterial.certificateIdentity,
    sourceMetadata: normalizeSigningSourceMetadata(input.source),
    supportedAlgorithms: SUPPORTED_SIGNATURE_ALGORITHMS,
  };

  attachSigningRuntimeMaterial(signingContext, {
    privateKeyPem: parsedMaterial.privateKeyPem,
    publicCertPem: parsedMaterial.publicCertPem,
  });

  return signingContext;
}

interface ParsedPkcs12Material {
  certificateIdentity: string;
  privateKeyPem: string;
  publicCertPem: string;
}

/**
 * Extracts the first certificate and private key from a PKCS#12 payload.
 *
 * @param pkcs12Bytes - Raw PKCS#12 bytes.
 * @param passphrase - Passphrase used to decrypt the PKCS#12 container.
 * @returns Parsed PEM material plus the public certificate identity.
 * @throws {CreateSigningContextError} When the PKCS#12 payload is malformed or incomplete.
 */
function extractPkcs12Material(
  pkcs12Bytes: Buffer,
  passphrase: string,
): ParsedPkcs12Material {
  try {
    const derBuffer = forge.util.createBuffer(pkcs12Bytes.toString('binary'));
    const asn1 = forge.asn1.fromDer(derBuffer);
    const pkcs12 = forge.pkcs12.pkcs12FromAsn1(asn1, false, passphrase);
    const certificateBags = pkcs12.getBags({ bagType: forge.pki.oids.certBag })[
      forge.pki.oids.certBag
    ];
    const privateKeyBags =
      pkcs12.getBags({ bagType: forge.pki.oids.pkcs8ShroudedKeyBag })[
        forge.pki.oids.pkcs8ShroudedKeyBag
      ] ??
      pkcs12.getBags({ bagType: forge.pki.oids.keyBag })[
        forge.pki.oids.keyBag
      ];

    const certificate = certificateBags?.[0]?.cert;
    const privateKey = privateKeyBags?.[0]?.key;

    if (!certificate || !privateKey) {
      throw new CreateSigningContextError(
        'The A1 payload does not contain both certificate and private key.',
      );
    }

    return {
      certificateIdentity: getCertificateIdentity(certificate),
      privateKeyPem: forge.pki.privateKeyToPem(privateKey),
      publicCertPem: forge.pki.certificateToPem(certificate),
    };
  } catch (error) {
    if (error instanceof CreateSigningContextError) {
      throw error;
    }

    throw new CreateSigningContextError(
      'The A1 payload could not be parsed with the provided passphrase.',
    );
  }
}

/**
 * Builds a stable certificate identity string for diagnostics and tests.
 *
 * @param certificate - Parsed certificate extracted from the PKCS#12 payload.
 * @returns Stable identity derived from certificate subject and serial number.
 */
function getCertificateIdentity(certificate: forge.pki.Certificate): string {
  const commonNameField = certificate.subject.getField('CN');
  const commonName =
    typeof commonNameField?.value === 'string' && commonNameField.value.length > 0
      ? commonNameField.value
      : 'unknown-subject';

  return `${commonName}:${certificate.serialNumber}`;
}