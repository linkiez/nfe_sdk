/**
 * Optional environment variables:
 * - NFE_XML_PATH
 * - NFE_XSD_DIR
 *
 * Tooling prerequisite:
 * - `xmllint` available in PATH when schema validation should run locally.
 */
import { readFile } from 'node:fs/promises';

import { validateNFeXsd } from 'nfe-sdk';

const SAMPLE_NFE_XML =
  '<?xml version="1.0" encoding="utf-8"?><NFe xmlns="http://www.portalfiscal.inf.br/nfe"><infNFe versao="4.00" Id="NFe35160512345678000123550010000000011000000011"></infNFe></NFe>';

async function loadXmlInput(): Promise<string> {
  const xmlPath = process.env.NFE_XML_PATH;

  if (!xmlPath) {
    return SAMPLE_NFE_XML;
  }

  return readFile(xmlPath, 'utf8');
}

async function main(): Promise<void> {
  const xml = await loadXmlInput();
  const outcome = validateNFeXsd(
    xml,
    process.env.NFE_XSD_DIR ? { xsdDir: process.env.NFE_XSD_DIR } : undefined,
  );

  process.stdout.write(`${JSON.stringify(outcome, null, 2)}\n`);
}

main().catch((error: unknown) => {
  const message =
    error instanceof Error ? error.message : 'Unknown XSD validation error';
  process.stderr.write(`${message}\n`);
  process.exitCode = 1;
});
