# Quickstart: Implementação das Gaps do Roadmap Gap Audit

**Feature**: `012-implement-audit-gaps` | **Date**: 2026-05-19

Practical examples for the main capabilities added by this feature, organized by priority
band. All examples assume `import { ... } from 'nfe-sdk'` (ESM).

---

## P1 — Blockers: Access Key and hashCSRT

### Computing a correct NF-e access key

```typescript
import { computeNFeAccessKey, computeHashCSRT } from 'nfe-sdk';

// 1. Compute the access key
const keyResult = computeNFeAccessKey({
  cUF: '35', // SP
  AAMM: '2605', // May 2026
  CNPJ: '12345678000195',
  mod: '55', // NF-e modelo 55
  serie: '001',
  nNF: '000000001',
  tpEmis: '1', // Normal emission
  cNF: '12345678', // Random 8-digit code
});

console.log(keyResult.chNFe); // 44-digit string
console.log(keyResult.cDV); // single check digit

// 2. Compute hashCSRT for the technical responsible field
const hash = computeHashCSRT({
  cnpj: '12345678000195',
  idCSRT: '01',
  csrt: 'G8063VRTPN1C4BK2DHM96ZBBU40H5UQ8',
});
// hash → hex-encoded SHA-1 string for infRespTec.hashCSRT
```

---

## P2 — Multi-UF Routing and Production

### Resolving a UF to its autorizador

```typescript
import { resolveUFAutorizador, resolveNFeServiceEndpoint } from 'nfe-sdk';

// Resolve UF to autorizador
const routing = resolveUFAutorizador('AC'); // → { uf: 'AC', autorizador: 'SVC-AN', usesSVC: true }
const routing2 = resolveUFAutorizador('SP'); // → { uf: 'SP', autorizador: 'SP', usesSVC: false }

// Then resolve the endpoint using the autorizador as provider
const endpoint = resolveNFeServiceEndpoint({
  provider: routing.autorizador,
  service: 'nfe-authorization',
  environment: 'production', // production now available
  version: '4.00',
});
```

---

## P3 — EPEC Contingency

### Submitting an EPEC event during autorizador outage

```typescript
import { submitEPECEvent, createSigningContext } from 'nfe-sdk';
import { createRequestExecutor } from 'nfe-sdk'; // hypothetical fetch-based executor

const signingCtx = await createSigningContext({
  type: 'file-path',
  filePath: '/certs/empresa.pfx',
  passphrase: process.env.CERT_PASS,
});

const result = await submitEPECEvent({
  chNFe: '35260512345678000195550010000000011234567891',
  issuerCNPJ: '12345678000195',
  recipientDocument: '98765432000181',
  totalValue: '1500.00',
  emissionDateTime: '2026-05-19T14:30:00-03:00',
  issuerUF: 'SP', // routes to SP autorizador for EPEC, or SVC-AN per MOC §3.3
  signingContext: signingCtx,
  requestExecutor: executor,
});

if (result.classification === 'registered') {
  console.log('EPEC registered, protocol:', result.protocolNumber);
  // Store result.chNFe in pending list; reauthorize after connectivity restored
}
```

---

## P4 — Async Batch Retrieval

### Polling for async NF-e batch results

```typescript
import { retrieveNFeAuthorizationBatch } from 'nfe-sdk';

// After receiving nRec from NFeAutorizacao4:
const batch = await retrieveNFeAuthorizationBatch({
  nRec: '135260000012345',
  environment: 'production',
  version: '4.00',
  issuerUF: 'SP',
  requestExecutor: executor,
});

if (batch.classification === 'complete') {
  for (const item of batch.items) {
    if (item.classification === 'authorized') {
      console.log(`NF-e ${item.chNFe} authorized: ${item.protocolNumber}`);
    } else {
      console.warn(
        `NF-e ${item.chNFe} not authorized: ${item.statusDescription}`,
      );
    }
  }
} else if (batch.classification === 'processing') {
  // Retry after a delay
}
```

---

## P5 — Recipient Queries

### Querying by NSU and by access key

```typescript
import { queryNFeByNSU, queryNFeByAccessKey } from 'nfe-sdk';

const actor = {
  documentType: 'cnpj',
  documentNumber: '98765432000181',
} as const;

// By NSU
const byNSU = await queryNFeByNSU({
  actor,
  nsu: '000000000001234',
  environment: 'production',
  signingContext: signingCtx,
  requestExecutor: executor,
});

// By access key
const byKey = await queryNFeByAccessKey({
  actor,
  chNFe: '35260512345678000195550010000000011234567891',
  environment: 'production',
  signingContext: signingCtx,
  requestExecutor: executor,
});
```

### Correcting a wrong manifestation type

```typescript
import { changeManifestRecipientOperation } from 'nfe-sdk';

// Correct a 'ciencia-da-operacao' to 'confirmacao-da-operacao'
const change = await changeManifestRecipientOperation({
  actor,
  chNFe: '35260512345678000195550010000000011234567891',
  fromType: 'ciencia-da-operacao',
  toType: 'confirmacao-da-operacao',
  environment: 'production',
  signingContext: signingCtx,
  requestExecutor: executor,
});
```

---

## P6 — XSD Pre-Validation

### Validating NF-e XML before sending to SEFAZ

```typescript
import { serializeNFeXml, validateNFeXsd } from 'nfe-sdk';

const xml = await serializeNFeXml(nfeDocument);

const validation = await validateNFeXsd(xml);

if (validation.classification === 'xmllint-unavailable') {
  console.warn('xmllint not found — XSD pre-validation skipped');
} else if (validation.classification === 'invalid') {
  console.error('XSD validation errors:', validation.errors);
  // Do not transmit — fix the document first
} else if (validation.classification === 'valid') {
  // Proceed to sign and transmit
}
```

### e-CPF signing (individual person issuer)

```typescript
import { createSigningContext, signNFeXml } from 'nfe-sdk';

// e-CPF A1 PFX works identically to e-CNPJ — the signing infrastructure is
// certificate-agnostic. No special API needed.
const signingCtxCPF = await createSigningContext({
  type: 'in-memory-content',
  contentBase64: Buffer.from(cpfCertPfxBytes).toString('base64'),
  passphrase: process.env.CPF_CERT_PASS,
});

const signedXml = await signNFeXml(nfeXml, signingCtxCPF);
```

---

## P7 — ICMS Deferral Event

```typescript
import { submitICMSDeferralEvent } from 'nfe-sdk';

const result = await submitICMSDeferralEvent({
  documents: [
    {
      chNFe: '35260512345678000195550010000000011234567891',
      payload: {
        family: 'prorrogacao-icms',
        data: {
          chNFeRef: '35260512345678000195550010000000011234567891',
          daysRequested: 60,
          justification:
            'Mercadoria sob regime de suspensão de ICMS interestadual',
        },
      },
    },
  ],
  environment: 'production',
  version: '4.00',
  signingContext: signingCtx,
  requestExecutor: executor,
});
```

---

## P8 — Contributor Registration Query

```typescript
import { queryContributorRegistration } from 'nfe-sdk';

const reg = await queryContributorRegistration({
  cnpj: '98765432000181',
  uf: 'SP',
  environment: 'production',
  signingContext: signingCtx,
  requestExecutor: executor,
});

if (reg.classification === 'found') {
  console.log(
    'Contributor:',
    reg.name,
    '| IE:',
    reg.ie,
    '| Status:',
    reg.ieStatus,
  );
}
```

---

## P9 — Watchlist Monitoring (no code required)

GAP-006 (NF-e ABI), GAP-017 (rural series), and GAP-009 (signing confirmation in specs
009/010) do not produce code in this feature. See
`docs/_meta/nt-tracking-process.md` for the monitoring and decision process.
