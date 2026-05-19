import {
  validateNFeXsd as validateNFeXsdCore,
  type XsdValidationOptions,
  type XsdValidationResult,
} from '../validation/validate-nfe-xsd.js';

export type { XsdValidationOptions, XsdValidationResult };
export type { XsdValidationClassification } from '../validation/validate-nfe-xsd.js';

/**
 * Validates an NF-e XML string against the official XSD schema using xmllint.
 * Returns `xmllint-unavailable` when xmllint is not installed, without throwing.
 *
 * @param xml - Raw NF-e XML string to validate.
 * @param options - Optional overrides for schema path resolution.
 * @returns Structured validation result with classification and error list.
 */
export function validateNFeXsd(xml: string, options?: XsdValidationOptions): XsdValidationResult {
  return validateNFeXsdCore(xml, options);
}
