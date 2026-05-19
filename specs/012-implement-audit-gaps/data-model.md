# Data Model: Implementação das Gaps do Roadmap Gap Audit

**Feature**: `012-implement-audit-gaps` | **Date**: 2026-05-19

Defines all new TypeScript interfaces, types, and enum variants introduced by this feature.
All new types are additive. Existing types are extended only where noted.

---

## New Types by Module

### `src/canonical/nfe/access-key.ts` — GAP-001

```typescript
/** Decomposed fields used to compute a NF-e access key (chNFe). */
export interface AccessKeyFields {
  /** 2-digit UF code (cUF). */
  readonly cUF: string;
  /** Emission year-month AAMM (4 digits). */
  readonly AAMM: string;
  /** Issuer CNPJ (14 digits, digits only). */
  readonly CNPJ: string;
  /** Document model code (2 digits, e.g. '55' for NF-e). */
  readonly mod: string;
  /** Document series (3 digits, zero-padded). */
  readonly serie: string;
  /** Document number nNF (9 digits, zero-padded). */
  readonly nNF: string;
  /** Emission type code tpEmis (1 digit). */
  readonly tpEmis: string;
  /** Random numeric code cNF (8 digits). */
  readonly cNF: string;
}

/** Result of access key computation. */
export interface AccessKeyResult {
  /** Full 44-digit access key including check digit. */
  readonly chNFe: string;
  /** Computed check digit (cDV). */
  readonly cDV: string;
}
```

---

### `src/canonical/nfe/hash-csrt.ts` — GAP-002

```typescript
/** Input for hashCSRT computation per MOC §2.2.10. */
export interface HashCSRTInput {
  /** Issuer CNPJ (14 digits, digits only). */
  readonly cnpj: string;
  /** Technical responsible identifier (idCSRT). */
  readonly idCSRT: string;
  /** CSRT token value. */
  readonly csrt: string;
}
```

Returns `string` (hex-encoded SHA-1 digest).

---

### `src/canonical/nfe/epec/contracts.ts` — GAP-003

```typescript
/** SVC target for EPEC event routing. */
export type EPECSVCTarget = 'SVC-AN' | 'SVC-RS';

/** Input to build and submit an EPEC contingency event. */
export interface EPECEventInput {
  /** NF-e access key of the document being pre-emitted. */
  readonly chNFe: string;
  /** Issuer CNPJ (14 digits). */
  readonly issuerCNPJ: string;
  /** Recipient CNPJ or CPF. */
  readonly recipientDocument: string;
  /** NF-e total value (vNF). */
  readonly totalValue: string;
  /** Date-hour of emission (ISO 8601). */
  readonly emissionDateTime: string;
  /** UF code of the issuer (determines SVC routing). */
  readonly issuerUF: string;
  readonly signingContext: import('../signing/contracts.js').SigningContext;
  readonly requestExecutor: import('../transport/request-executor.js').RequestExecutor;
}

/** Outcome classifications for EPEC event submission. */
export type EPECEventClassification =
  | 'registered'
  | 'rejected'
  | 'timeout'
  | 'unavailable'
  | 'protocol-error'
  | 'usage-error';

/** Result of an EPEC event submission. */
export interface EPECEventOutcome {
  readonly classification: EPECEventClassification;
  /** SEFAZ event protocol number when registered. */
  readonly protocolNumber?: string;
  readonly svcTarget: EPECSVCTarget;
  readonly rawResponse?: string;
}
```

---

### `src/canonical/nfe/async-batch-retrieval.ts` — GAP-012

```typescript
/** Result status for a single NF-e document in an async batch. */
export type AsyncBatchItemClassification =
  | 'authorized'
  | 'denied'
  | 'cancelled'
  | 'pending'
  | 'processing-error';

/** Authorization result for one NF-e within an async batch response. */
export interface AsyncBatchItemResult {
  readonly chNFe: string;
  readonly classification: AsyncBatchItemClassification;
  /** Authorization protocol number when authorized. */
  readonly protocolNumber?: string;
  readonly statusCode: string;
  readonly statusDescription: string;
}

/** Input to retrieve an async NF-e authorization batch by receipt number. */
export interface NFeAsyncBatchRetrievalInput {
  readonly nRec: string;
  readonly environment: import('../shared/contracts.js').CanonicalEnvironment;
  readonly version: import('../shared/contracts.js').CanonicalVersion;
  readonly issuerUF: string;
  readonly requestExecutor: import('../transport/request-executor.js').RequestExecutor;
}

/** Overall outcome of an async batch retrieval call. */
export type NFeAsyncBatchClassification =
  | 'complete'
  | 'processing'
  | 'not-found'
  | 'timeout'
  | 'unavailable'
  | 'protocol-error'
  | 'usage-error';

export interface NFeAsyncBatchOutcome {
  readonly classification: NFeAsyncBatchClassification;
  readonly items: readonly AsyncBatchItemResult[];
  readonly rawResponse?: string;
}
```

---

### `src/canonical/transport/uf-routing.ts` — GAP-004

```typescript
/**
 * Known NF-e autorizador providers (14 autorizadores + SVAN virtual).
 * Extends the existing provider strings in the transport catalog.
 */
export type NFeSEFAZAutorizador =
  | 'AM'
  | 'BA'
  | 'CE'
  | 'GO'
  | 'MG'
  | 'MS'
  | 'MT'
  | 'PA'
  | 'PE'
  | 'PR'
  | 'RS'
  | 'SP'
  | 'SVC-AN'
  | 'SVC-RS'
  | 'SVAN';

/** Result of resolving a UF code to its SEFAZ autorizador. */
export interface UFRoutingResult {
  readonly uf: string;
  readonly autorizador: NFeSEFAZAutorizador;
  /** Whether this UF uses a virtual SVC autorizador rather than its own. */
  readonly usesSVC: boolean;
}
```

---

### `src/canonical/recipient/` — GAP-008, GAP-010, GAP-015

```typescript
// query-nfe-by-nsu.ts — GAP-008
export interface RecipientNSUQuery {
  readonly actor: import('./recipient-shared.js').RecipientActor;
  readonly nsu: string;
  readonly environment: import('../shared/contracts.js').CanonicalEnvironment;
  readonly signingContext: import('../signing/contracts.js').SigningContext;
  readonly requestExecutor: import('../transport/request-executor.js').RequestExecutor;
}

// query-nfe-by-key.ts — GAP-008
export interface RecipientAccessKeyQuery {
  readonly actor: import('./recipient-shared.js').RecipientActor;
  readonly chNFe: string;
  readonly environment: import('../shared/contracts.js').CanonicalEnvironment;
  readonly signingContext: import('../signing/contracts.js').SigningContext;
  readonly requestExecutor: import('../transport/request-executor.js').RequestExecutor;
}

// query-contributor-registration.ts — GAP-010
export interface ContributorRegistrationQuery {
  readonly cnpj?: string;
  readonly ie?: string;
  readonly uf: string;
  readonly environment: import('../shared/contracts.js').CanonicalEnvironment;
  readonly signingContext: import('../signing/contracts.js').SigningContext;
  readonly requestExecutor: import('../transport/request-executor.js').RequestExecutor;
}

export type ContributorRegistrationClassification =
  | 'found'
  | 'not-found'
  | 'rejected'
  | 'timeout'
  | 'unavailable'
  | 'protocol-error'
  | 'usage-error';

export interface ContributorRegistrationOutcome {
  readonly classification: ContributorRegistrationClassification;
  readonly name?: string;
  readonly ie?: string;
  readonly ieStatus?: string;
  readonly rawResponse?: string;
}

// change-manifestation.ts — GAP-015
export interface ManifestationChangeInput {
  readonly actor: import('./recipient-shared.js').RecipientActor;
  readonly chNFe: string;
  readonly fromType: import('./recipient-shared.js').RecipientManifestationEventType;
  readonly toType: import('./recipient-shared.js').RecipientManifestationEventType;
  readonly justification?: string;
  readonly environment: import('../shared/contracts.js').CanonicalEnvironment;
  readonly signingContext: import('../signing/contracts.js').SigningContext;
  readonly requestExecutor: import('../transport/request-executor.js').RequestExecutor;
}
```

Returns `RecipientManifestationOutcome` (existing type).

---

### `src/canonical/generic-event/contracts.ts` — GAP-007 (EXTENSION)

```typescript
// GenericEventFamily union extended (additive):
// BEFORE: 'cancellation' | 'correction-letter' | 'econf' | ...
// AFTER:  add 'prorrogacao-icms'

// New payload type in prorrogacao-icms-payload.ts:
export interface ICMSDeferralPayload {
  /** NF-e access key of the document whose ICMS is being deferred. */
  readonly chNFeRef: string;
  /** Number of days of deferral extension requested. */
  readonly daysRequested: number;
  /** Justification text per MOC §3.4 requirements. */
  readonly justification: string;
}
```

---

### `src/canonical/validation/validate-nfe-xsd.ts` — GAP-014

```typescript
export interface XsdValidationOptions {
  /** Schema family to validate against. Defaults to CANONICAL_SCHEMA_FAMILY. */
  readonly schemaFamily?: string;
  /** Absolute path to xsd/ directory. Defaults to resolved path from package root. */
  readonly xsdDir?: string;
}

export type XsdValidationClassification =
  | 'valid'
  | 'invalid'
  | 'xmllint-unavailable'
  | 'schema-not-found'
  | 'execution-error';

export interface XsdValidationResult {
  readonly classification: XsdValidationClassification;
  /** True when xmllint is installed and schema was found. */
  readonly available: boolean;
  /** List of validation error messages when classification is 'invalid'. */
  readonly errors: readonly string[];
}
```

---

## Modified Types

### `src/canonical/shared/contracts.ts` — GAP-001 resolution

`FunctionalCoverageGapType`: remove `'derived-identifier-deferred'` and
`'xsd-validation-deferred'` (both gaps resolved). Any existing `gap-register.ts` factory
functions for these types are removed; callers that reference them are updated.

> **Impact**: Internal only — `FunctionalCoverageGapType` is not re-exported to
> `src/index.ts` consumers. No public contract breaking change.

---

## Entities Summary

| Entity                           | Module                                     | Gap                | Status              |
| -------------------------------- | ------------------------------------------ | ------------------ | ------------------- |
| `AccessKeyFields`                | `nfe/access-key`                           | GAP-001            | New                 |
| `AccessKeyResult`                | `nfe/access-key`                           | GAP-001            | New                 |
| `HashCSRTInput`                  | `nfe/hash-csrt`                            | GAP-002            | New                 |
| `EPECEventInput`                 | `nfe/epec/contracts`                       | GAP-003            | New                 |
| `EPECEventOutcome`               | `nfe/epec/contracts`                       | GAP-003            | New                 |
| `UFRoutingResult`                | `transport/uf-routing`                     | GAP-004            | New                 |
| `NFeSEFAZAutorizador`            | `transport/uf-routing`                     | GAP-004            | New                 |
| `ICMSDeferralPayload`            | `generic-event/prorrogacao-icms-payload`   | GAP-007            | New                 |
| `RecipientNSUQuery`              | `recipient/query-nfe-by-nsu`               | GAP-008            | New                 |
| `RecipientAccessKeyQuery`        | `recipient/query-nfe-by-key`               | GAP-008            | New                 |
| `ContributorRegistrationQuery`   | `recipient/query-contributor-registration` | GAP-010            | New                 |
| `ContributorRegistrationOutcome` | `recipient/query-contributor-registration` | GAP-010            | New                 |
| `NFeAsyncBatchOutcome`           | `nfe/async-batch-retrieval`                | GAP-012            | New                 |
| `GenericEventFamily`             | `generic-event/contracts`                  | GAP-007            | Extended            |
| `XsdValidationResult`            | `validation/validate-nfe-xsd`              | GAP-014            | New                 |
| `ManifestationChangeInput`       | `recipient/change-manifestation`           | GAP-015            | New                 |
| `FunctionalCoverageGapType`      | `shared/contracts`                         | GAP-001 resolution | Narrowed (internal) |
