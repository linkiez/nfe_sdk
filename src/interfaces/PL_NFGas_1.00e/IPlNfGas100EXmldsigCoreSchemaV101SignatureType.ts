import { CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType';

import { CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType';

import { CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IPlNfGas100EXmldsigCoreSchemaV101SignatureType.
 */
export interface IPlNfGas100EXmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CPlNfGas100EXmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CPlNfGas100EXmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CPlNfGas100EXmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
