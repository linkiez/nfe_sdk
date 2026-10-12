# Public Contract: SP NFC-e DANFE Rendering

## Proposed Root API

```ts
export interface RenderNFCeSPDANFEInput {
  readonly authorization: NFCeAuthorizationOutcome;
  readonly paperWidthMm?: number;
}

export interface NFCeSPDanfeResult {
  readonly accessKey: string;
  readonly environment: 'homologation' | 'production';
  readonly html: string;
  readonly mediaType: 'text/html';
  readonly protocolNumber: string;
  readonly requestEnvelopeSha256: string;
}

export function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEInput,
): Promise<NFCeSPDanfeResult>;

export interface RenderNFCeSPDANFEOfflineInput {
  readonly offlineRecord: NFCeSPOfflineRecord;
  readonly paperWidthMm?: number;
}

export interface NFCeSPOfflineDanfeResult {
  readonly accessKey: string;
  readonly classification: 'pending-authorization';
  readonly environment: 'homologation' | 'production';
  readonly html: string;
  readonly mediaType: 'text/html';
  readonly signedXmlSha256: string;
}

export function renderNFCeSPDANFE(
  input: RenderNFCeSPDANFEOfflineInput,
): Promise<NFCeSPOfflineDanfeResult>;
```

The new function and types are additive exports through the existing root package entrypoint. Naming and declaration placement may follow adjacent NFC-e conventions during implementation but must preserve this behavior.

## Input Invariants

- Offline input must contain the exact signed XML, matching SHA-256, pending status, caller-calculated submission deadline, and official offline QR v2 URL.

- `authorization.classification` must be `authorized`; transport evidence must contain well-formed request and response envelopes, protocol number and QR URL.
- Extract the signed SP model 65 `<NFe>` from the captured SOAP request envelope. It must contain `infNFe/@Id="NFe<44-digit-key>"`, identify SP, and carry `tpAmb` consistent with the outcome.
- The authorization response must identify the same access key, environment and protocol as the request XML and outcome. Use the response structure rather than a broad text search that can match unrelated XML fields.
- The QR URL must use the official SP v3 URL for the same environment and encode exactly `<access-key>|3|<tpAmb>`; accept no caller-supplied alternative URL.
- Paper width defaults to 80 mm and must be within 56-210 mm inclusive. Reject unsupported values rather than clipping required information.
- Any malformed or contradictory input rejects the operation; it must not return HTML that could be mistaken for an authorized DANFE.

## Output Invariants

- Offline output prints `EMITIDA EM CONTINGÊNCIA Pendente de autorização`, never prints an authorization protocol, and uses the v2 offline URL parameters and hash from Manual v6 sections 4.3.2 and 4.3.5.

- `html` is a complete, self-contained document with no external resources or network behavior. XML-derived content is text-escaped; source XML is not inserted as markup.
- Include all applicable national manual fields and every item in full detail, the exact 44-digit key in 11 groups of four, consultation URL, protocol/date, required totals/payments, and fiscal/contributor messages from source data.
- QR is inline SVG, encodes the exact correlated official URL, uses error correction level M, and respects 25 mm minimum size (22 mm content + 3 mm quiet-zone allowance); larger QR sizes reserve 10% for the safe margin.
- Production output is identified as an authorized SP DANFE. Homologation output prints the manual's centered uppercase `EMITIDA EM AMBIENTE DE HOMOLOGAÇÃO – SEM VALOR FISCAL` notice.
- Use full item detail only. Do not silently truncate/omit mandatory content or imply ECF, contingency, non-SP, PDF/PNG or state-consented summary support.
- The result reports the correlated key/environment/protocol and SHA-256 of the exact captured SOAP request envelope for reproducibility.

## Errors

The implementation should use the existing NFC-e error conventions. Invalid width, malformed XML, non-SP/model-65 input, non-authorized/missing evidence, QR mismatch, identity mismatch, or missing mandatory data must produce a deterministic validation error. No partial result is returned.

## Compatibility

No existing authorization, QR v3 composition, schema, XSD, or import path changes. The renderer and types are new root exports; release notes and public-contract audit must recognize the additive public surface and runtime dependency.
