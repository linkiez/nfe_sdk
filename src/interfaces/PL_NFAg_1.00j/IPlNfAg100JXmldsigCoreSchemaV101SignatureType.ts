import { CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType';

import { CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType';

import { CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IPlNfAg100JXmldsigCoreSchemaV101SignatureType.
 */
export interface IPlNfAg100JXmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CPlNfAg100JXmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CPlNfAg100JXmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CPlNfAg100JXmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
