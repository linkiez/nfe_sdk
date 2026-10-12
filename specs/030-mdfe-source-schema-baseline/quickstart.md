# Quickstart: MDF-e Source and Schema Baseline

## Prerequisites

- Node.js `>=18.18` and npm installed for repository validation commands.
- Network access to the official sources listed in [research.md](research.md) when refreshing evidence.
- No certificates, credentials, or production access are required. This feature does not issue or transmit fiscal documents.

## Review the Baseline

1. Read the [source register](research.md#source-register) and verify each included URL resolves to the named official publisher.
2. Confirm legal publication/effective dates are not conflated with portal posting dates, package revisions, or service deployment dates.
3. For each proposed schema package, retrieve the archive only from its official registered link; calculate and record its SHA-256 digest, exact filename, namespaces, entrypoint schemas, and source metadata before calling it verified, whether or not the archive will be retained. If a digest or package contents cannot be verified, keep that package unverified.
4. Reconcile the legal act and amendments, the MOC/NT, the package revision, and the service catalog. Record conflicts and inaccessible sources as gaps rather than resolving them from secondary summaries.
5. Complete one scope-matrix row per issuer cohort, UF, environment, operation, schema package, and route. Keep SP as a candidate until eligibility and operation evidence is primary-source-backed; leave MDF-e contingency excluded or unverified unless an official procedure is found.
6. Confirm that no public package contract, `src/`, `xsd/`, generated artifact, or runtime behavior changed in this documentation-only slice.

The field definitions and readiness invariants are in [data-model.md](data-model.md). Any unverified required evidence keeps the dependent [MDF-e SP runtime spec](../031-mdfe-sp-runtime/spec.md) blocked from implementation promotion.

## Run Validation

From the repository root:

```bash
npm exec prettier -- --check specs/030-mdfe-source-schema-baseline/*.md
npm run docs:links
npm test -- --runInBand
npm run lint
npm run format:check
npm run typecheck
npm run build
npm run audit:public-contract
npm run validate:tarball
```

The first two commands validate this feature's documentation and links. The package-wide commands are impact checks; passing tests or builds does not verify fiscal-source accuracy. The existing `format:check` file list does not include this feature directory, so keep the explicit Prettier command.

## Validation Outcomes

Run on 2026-10-12 after the evidence and dependent-spec updates:

| Gate                                                | Outcome                                                                                                                                                                                       |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Feature Markdown Prettier check, including spec 031 | Passed.                                                                                                                                                                                       |
| `npm run docs:links`                                | Passed; no broken internal links found.                                                                                                                                                       |
| `npm test -- --runInBand`                           | 111 of 112 suites passed (376 of 377 tests). One Playwright integration test could not launch because the configured Chromium executable is not installed; no browser download was attempted. |
| `npm run lint`                                      | Passed.                                                                                                                                                                                       |
| `npm run format:check`                              | Passed; feature 030 Markdown is checked separately.                                                                                                                                           |
| `npm run typecheck`                                 | Passed.                                                                                                                                                                                       |
| Build                                               | Passed inside `npm run validate:tarball`; a separate build compilation also passed with output directed to a temporary directory.                                                             |
| `npm run audit:public-contract`                     | Completed; the unchanged manifest reports 67 existing gaps across 23 folders (23 collisions, 21 review items, 23 unpublished families). No MDF-e or manifest changes were made.               |
| `npm run validate:tarball`                          | Passed; a temporary consumer imported `nfe-sdk` successfully. The original 644-file ignored `dist/` snapshot was restored after the clean-first command.                                      |

These are repository/package impact results, not proof of MDF-e fiscal correctness. The missing Playwright browser is an environment limitation. The public-contract gaps are pre-existing and outside this documentation-only feature.

Do not run `npm run generate` for this feature: no official MDF-e XSD archive has been adopted and no generated output is in scope. A future generation change must first resolve the recursive index-writing and existing-file collision behavior documented in [research.md](research.md#repository-findings), then validate that unrelated generated output remains unchanged.

## Expected Outcome

- Every included requirement and route traces to a current primary source with provenance and applicability status.
- The schema package filename/revision, namespace inventory, and applicability are explicit, or the unresolved gap is clearly recorded and the runtime scope remains blocked.
- The SP scope contains explicit included/deferred operations, environments, routes, and exclusions; no nationwide or contingency claim is inferred.
- Documentation formatting/link checks pass. Package-wide gates remain unchanged by this docs-only feature.
