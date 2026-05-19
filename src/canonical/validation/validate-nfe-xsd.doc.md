# validate-nfe-xsd.ts

## Purpose

Provides synchronous XSD schema validation for NF-e XML documents using the system `xmllint` tool.

## Exports

### `validateNFeXsd(xml, options?): XsdValidationResult`

Validates an XML string against the NF-e XSD schema. Returns a result object without throwing.

**Parameters:**
- `xml: string` — The XML content to validate
- `options?: XsdValidationOptions` — Optional configuration
  - `schemaFamily?: string` — Schema family subdirectory (default: `'PL_010c_NT2022_002v1.30'`)
  - `xsdDir?: string` — Base directory for XSD files (default: `<cwd>/xsd`)

**Returns:** `XsdValidationResult`
- `classification: XsdValidationClassification` — Outcome category
- `available: boolean` — Whether xmllint is available
- `errors: readonly string[]` — Validation error messages

### `XsdValidationClassification`

Union type: `'valid' | 'invalid' | 'xmllint-unavailable' | 'schema-not-found' | 'execution-error'`

### `XsdValidationOptions`

Interface for optional configuration parameters.

### `XsdValidationResult`

Interface for the validation result.

## Behavior

- Uses `xmllint` via `spawnSync` from `node:child_process`
- Gracefully handles missing `xmllint` (`xmllint-unavailable`)
- Gracefully handles missing XSD schema (`schema-not-found`)
- Returns `execution-error` on unexpected runtime failures
- Never throws; all errors are captured in the result

## Dependencies

- `node:child_process` (spawnSync)
- `node:path` (resolve)
- System `xmllint` binary (optional)

## Location

`src/canonical/validation/validate-nfe-xsd.ts`
