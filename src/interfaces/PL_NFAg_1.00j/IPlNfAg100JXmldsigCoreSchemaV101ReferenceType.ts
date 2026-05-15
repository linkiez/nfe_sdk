import { CPlNfAg100JXmldsigCoreSchemaV101TransformsType } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JXmldsigCoreSchemaV101TransformsType';

import { TPlNfAg100JXmldsigCoreSchemaV101DigestValueType } from '../../types/PL_NFAg_1.00j/TPlNfAg100JXmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IPlNfAg100JXmldsigCoreSchemaV101ReferenceType.
 */
export interface IPlNfAg100JXmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CPlNfAg100JXmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TPlNfAg100JXmldsigCoreSchemaV101DigestValueType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
  /**
   * Schema attribute uri.
   */
  $URI?: any;
  /**
   * Schema attribute type.
   */
  $Type?: string;
}
