import { CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType';

import { CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureValueType } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureValueType';

import { CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureType.
 */
export interface IPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
