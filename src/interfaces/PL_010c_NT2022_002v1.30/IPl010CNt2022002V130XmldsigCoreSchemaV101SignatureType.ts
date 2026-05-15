import { CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType';

import { CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType';

import { CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType.
 */
export interface IPl010CNt2022002V130XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CPl010CNt2022002V130XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CPl010CNt2022002V130XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
