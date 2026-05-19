# API Contract: Implementação das Gaps do Roadmap Gap Audit

**Feature**: `012-implement-audit-gaps` | **Date**: 2026-05-19

Defines the public contract additions to the `nfe-sdk` package. All entries are **additive
new exports** from `src/index.ts`. No existing export is renamed or removed.

---

## New Facade Functions

All functions are exported from the package root (`import { ... } from 'nfe-sdk'`).

### GAP-001 — `computeNFeAccessKey`

```typescript
function computeNFeAccessKey(fields: AccessKeyFields): AccessKeyResult;
```

Computes the 44-digit NF-e access key (`chNFe`) and check digit (`cDV`) per MOC §2.2.6.
Synchronous, pure computation — no I/O.

---

### GAP-002 — `computeHashCSRT`

```typescript
function computeHashCSRT(input: HashCSRTInput): string;
```

Returns the hex-encoded SHA-1 hash for `infRespTec.hashCSRT` per MOC §2.2.10.
Synchronous, pure computation — no I/O.

---

### GAP-003 — `submitEPECEvent`

```typescript
function submitEPECEvent(input: EPECEventInput): Promise<EPECEventOutcome>;
```

Builds and submits an EPEC contingency event to the appropriate SVC per MOC §3.3.

---

### GAP-004 — `resolveUFAutorizador`

```typescript
function resolveUFAutorizador(uf: string): UFRoutingResult;
```

Resolves a 2-digit UF code to its SEFAZ autorizador per the MOC autorizador catalog.
Throws `UnknownUFError` for unrecognized UF codes. Synchronous — no I/O.

---

### GAP-007 — `submitICMSDeferralEvent`

```typescript
function submitICMSDeferralEvent(
  input: GenericEventBatchRequest,
): Promise<GenericEventBatchOutcome>;
```

Submits an ICMS deferral extension event (`prorrogação ICMS`, code `110764`) per MOC §3.4.
Uses the existing `submitGenericEvents` infrastructure internally with family
`'prorrogacao-icms'`.

---

### GAP-008 — `queryNFeByNSU` and `queryNFeByAccessKey`

```typescript
function queryNFeByNSU(
  input: RecipientNSUQuery,
): Promise<RecipientDistributionOutcome>;

function queryNFeByAccessKey(
  input: RecipientAccessKeyQuery,
): Promise<RecipientDistributionOutcome>;
```

Retrieves a single DFe document by NSU or access key from the SEFAZ DFe distribution
service per MOC §3.2.2.1.

---

### GAP-010 — `queryContributorRegistration`

```typescript
function queryContributorRegistration(
  input: ContributorRegistrationQuery,
): Promise<ContributorRegistrationOutcome>;
```

Queries `CadConsultaCadastro4` for CNPJ/IE registration status from the appropriate UF
autorizador.

---

### GAP-012 — `retrieveNFeAuthorizationBatch`

```typescript
function retrieveNFeAuthorizationBatch(
  input: NFeAsyncBatchRetrievalInput,
): Promise<NFeAsyncBatchOutcome>;
```

Polls `NfeRetAutorizacao4` and returns authorization status for all NF-e documents in an
async batch identified by receipt number (`nRec`).

---

### GAP-014 — `validateNFeXsd`

```typescript
function validateNFeXsd(
  xml: string,
  options?: XsdValidationOptions,
): Promise<XsdValidationResult>;
```

Optionally validates NF-e XML against the bundled XSD schema using system `xmllint`.
Returns `{ available: false }` gracefully when `xmllint` is not installed. Does not throw.

---

### GAP-015 — `changeManifestRecipientOperation`

```typescript
function changeManifestRecipientOperation(
  input: ManifestationChangeInput,
): Promise<RecipientManifestationOutcome>;
```

Submits a manifestation change event per MOC §3.2.1.5. Validates the `fromType →
toType` transition; throws `InvalidManifestationTransitionError` for disallowed sequences.

---

## New Exported Types

| Type                                    | Source Module                                        | Gap     |
| --------------------------------------- | ---------------------------------------------------- | ------- |
| `AccessKeyFields`                       | `canonical/nfe/access-key`                           | GAP-001 |
| `AccessKeyResult`                       | `canonical/nfe/access-key`                           | GAP-001 |
| `HashCSRTInput`                         | `canonical/nfe/hash-csrt`                            | GAP-002 |
| `EPECEventInput`                        | `canonical/nfe/epec/contracts`                       | GAP-003 |
| `EPECEventOutcome`                      | `canonical/nfe/epec/contracts`                       | GAP-003 |
| `EPECEventClassification`               | `canonical/nfe/epec/contracts`                       | GAP-003 |
| `EPECSVCTarget`                         | `canonical/nfe/epec/contracts`                       | GAP-003 |
| `UFRoutingResult`                       | `canonical/transport/uf-routing`                     | GAP-004 |
| `NFeSEFAZAutorizador`                   | `canonical/transport/uf-routing`                     | GAP-004 |
| `ICMSDeferralPayload`                   | `canonical/generic-event/prorrogacao-icms-payload`   | GAP-007 |
| `RecipientNSUQuery`                     | `canonical/recipient/query-nfe-by-nsu`               | GAP-008 |
| `RecipientAccessKeyQuery`               | `canonical/recipient/query-nfe-by-key`               | GAP-008 |
| `ContributorRegistrationQuery`          | `canonical/recipient/query-contributor-registration` | GAP-010 |
| `ContributorRegistrationOutcome`        | `canonical/recipient/query-contributor-registration` | GAP-010 |
| `ContributorRegistrationClassification` | `canonical/recipient/query-contributor-registration` | GAP-010 |
| `NFeAsyncBatchRetrievalInput`           | `canonical/nfe/async-batch-retrieval`                | GAP-012 |
| `NFeAsyncBatchOutcome`                  | `canonical/nfe/async-batch-retrieval`                | GAP-012 |
| `NFeAsyncBatchClassification`           | `canonical/nfe/async-batch-retrieval`                | GAP-012 |
| `AsyncBatchItemResult`                  | `canonical/nfe/async-batch-retrieval`                | GAP-012 |
| `XsdValidationResult`                   | `canonical/validation/validate-nfe-xsd`              | GAP-014 |
| `XsdValidationOptions`                  | `canonical/validation/validate-nfe-xsd`              | GAP-014 |
| `XsdValidationClassification`           | `canonical/validation/validate-nfe-xsd`              | GAP-014 |
| `ManifestationChangeInput`              | `canonical/recipient/change-manifestation`           | GAP-015 |

---

## Existing Types Extended (Non-Breaking)

| Type                 | Change                           | Gap     |
| -------------------- | -------------------------------- | ------- |
| `GenericEventFamily` | Add `'prorrogacao-icms'` variant | GAP-007 |

---

## Compatibility Guarantee

- All 20 existing exports from `src/index.ts` are preserved without modification.
- No existing type shape is changed.
- `GenericEventFamily` extension is additive — existing switch/case consumers that handle
  all known variants will receive a TypeScript exhaustiveness error (compile-time only) when
  upgrading, prompting them to add the new branch. This is a deliberate design signal, not
  a runtime breaking change.
- `FunctionalCoverageGapType` narrowing is internal to `src/canonical/shared/contracts.ts`
  and is not re-exported; no public consumer impact.

---

## Error Types (New)

```typescript
/** Thrown when a UF code is not recognized in the autorizador catalog. */
export class UnknownUFError extends Error {
  readonly uf: string;
}

/** Thrown when the fromType → toType manifestation transition is not allowed by MOC §3.2.1.5. */
export class InvalidManifestationTransitionError extends Error {
  readonly fromType: string;
  readonly toType: string;
}
```
