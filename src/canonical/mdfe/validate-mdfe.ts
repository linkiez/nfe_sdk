import { resolve } from 'node:path';

import { validateNFeXsd, type XsdValidationResult } from '../validation/validate-nfe-xsd.js';

import { parseXmlTree } from './parse-xml-tree.js';

/** Package folder of the schemas selected for MDF-e documents, events and queries (spec 032). */
export const MDFE_XSD_FOLDER = 'PL_MDFe_300b_NT012025_1.05';
/** Package folder of the distribution-service schemas (`distDFeInt` 1.00). */
export const MDFE_DISTRIBUTION_XSD_FOLDER = 'PL_MDFeDistDFe_100';

interface SchemaEntry {
  readonly file: string;
  readonly folder: string;
  readonly version: string;
}

const entry = (file: string, folder = MDFE_XSD_FOLDER, version = '3.00'): SchemaEntry => ({
  file,
  folder,
  version,
});

const SCHEMA_BY_ROOT: Readonly<Record<string, SchemaEntry>> = {
  MDFe: entry('mdfe_v3.00.xsd'),
  mdfeProc: entry('procMDFe_v3.00.xsd'),
  eventoMDFe: entry('eventoMDFe_v3.00.xsd'),
  procEventoMDFe: entry('procEventoMDFe_v3.00.xsd'),
  consStatServMDFe: entry('consStatServMDFe_v3.00.xsd'),
  retConsStatServMDFe: entry('retConsStatServMDFe_v3.00.xsd'),
  consSitMDFe: entry('consSitMDFe_v3.00.xsd'),
  retConsSitMDFe: entry('retConsSitMDFe_v3.00.xsd'),
  consMDFeNaoEnc: entry('consMDFeNaoEnc_v3.00.xsd'),
  retConsMDFeNaoEnc: entry('retConsMDFeNaoEnc_v3.00.xsd'),
  distDFeInt: entry('distDFeInt_v1.00.xsd', MDFE_DISTRIBUTION_XSD_FOLDER, '1.00'),
  retDistDFeInt: entry('retDistDFeInt_v1.00.xsd', MDFE_DISTRIBUTION_XSD_FOLDER, '1.00'),
};

/** Options of `validateMDFeXml`. */
export interface MDFeValidationOptions {
  /** Absolute path of the schema folder; defaults to `xsd/<package>` under the working directory. */
  readonly xsdDir?: string;
}

/** Result of `validateMDFeXml`: the XSD result plus the schema that was selected. */
export interface MDFeValidationResult extends XsdValidationResult {
  /** Schema file chosen from the root element; absent when none applies. */
  readonly schemaFile?: string;
}

/**
 * Validates a MDF-e document, event, query message or distribution message against the selected
 * layout with `xmllint`. The schema is chosen from the root element and its layout version; an
 * unknown root or a version other than the one of the package is reported as `schema-not-found`
 * instead of guessing.
 *
 * @param xml - MDF-e XML text.
 * @param options - Optional schema folder override.
 * @returns The validation result with the schema used.
 */
export function validateMDFeXml(xml: string, options?: MDFeValidationOptions): MDFeValidationResult {
  const root = parseXmlTree(xml);
  const schema = root === undefined ? undefined : SCHEMA_BY_ROOT[root.name];
  const versions = [root?.attr('versao'), root?.find('infMDFe')?.attr('versao')].filter(
    (version): version is string => version !== undefined,
  );

  if (
    schema === undefined ||
    versions.length === 0 ||
    versions.some((version) => version !== schema.version)
  ) {
    return { classification: 'schema-not-found', available: false, errors: [] };
  }

  return {
    ...validateNFeXsd(xml, {
      schemaFamily: schema.file,
      xsdDir: options?.xsdDir ?? resolve(process.cwd(), 'xsd', schema.folder),
    }),
    schemaFile: schema.file,
  };
}
