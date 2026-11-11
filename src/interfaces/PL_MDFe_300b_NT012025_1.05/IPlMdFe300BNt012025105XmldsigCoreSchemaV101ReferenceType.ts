import { CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType';

import { TPlMdFe300BNt012025105XmldsigCoreSchemaV101DigestValueType } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType.
 */
export interface IPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TPlMdFe300BNt012025105XmldsigCoreSchemaV101DigestValueType;
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
