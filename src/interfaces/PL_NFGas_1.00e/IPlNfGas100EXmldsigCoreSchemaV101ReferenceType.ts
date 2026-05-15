import { CPlNfGas100EXmldsigCoreSchemaV101TransformsType } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EXmldsigCoreSchemaV101TransformsType';

import { TPlNfGas100EXmldsigCoreSchemaV101DigestValueType } from '../../types/PL_NFGas_1.00e/TPlNfGas100EXmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IPlNfGas100EXmldsigCoreSchemaV101ReferenceType.
 */
export interface IPlNfGas100EXmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CPlNfGas100EXmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TPlNfGas100EXmldsigCoreSchemaV101DigestValueType;
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
