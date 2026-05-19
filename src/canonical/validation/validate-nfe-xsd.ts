import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

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

const CANONICAL_SCHEMA_FAMILY = 'nfe_v4.00.xsd';
const DEFAULT_XSD_SUBDIR = 'PL_010c_NT2022_002v1.30';

/**
 * Validates an NF-e XML string against the official XSD schema using xmllint.
 * Returns `xmllint-unavailable` when xmllint is not installed, without throwing.
 *
 * @param xml - Raw NF-e XML string to validate.
 * @param options - Optional overrides for schema path resolution.
 * @returns Structured validation result with classification and error list.
 */
export function validateNFeXsd(xml: string, options?: XsdValidationOptions): XsdValidationResult {
  const xsdDir = options?.xsdDir ?? resolve(process.cwd(), 'xsd', DEFAULT_XSD_SUBDIR);
  const schemaFile = options?.schemaFamily ?? CANONICAL_SCHEMA_FAMILY;
  const schemaPath = resolve(xsdDir, schemaFile);

  try {
    const result = spawnSync(
      'xmllint',
      ['--noout', '--schema', schemaPath, '-'],
      {
        input: xml,
        encoding: 'utf-8',
        timeout: 10000,
      },
    );

    if (result.error) {
      const errorMessage = result.error.message ?? '';
      if (errorMessage.includes('ENOENT') || errorMessage.includes('xmllint')) {
        return { classification: 'xmllint-unavailable', available: false, errors: [] };
      }
      return { classification: 'execution-error', available: false, errors: [] };
    }

    if (result.status === 0) {
      return { classification: 'valid', available: true, errors: [] };
    }

    let stderrText = '';
    const stderrRaw = result.stderr;
    if (typeof stderrRaw === 'string') {
      stderrText = stderrRaw;
    } else if (stderrRaw != null) {
      stderrText = (stderrRaw as Buffer).toString('utf-8');
    }
    const errors = stderrText
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);

    return { classification: 'invalid', available: true, errors };
  } catch {
    return { classification: 'execution-error', available: false, errors: [] };
  }
}
