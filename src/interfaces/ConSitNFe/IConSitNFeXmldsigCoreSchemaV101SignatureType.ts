import { CConSitNFeXmldsigCoreSchemaV101KeyInfoType } from '../../classes/ConSitNFe/CConSitNFeXmldsigCoreSchemaV101KeyInfoType';

import { CConSitNFeXmldsigCoreSchemaV101SignatureValueType } from '../../classes/ConSitNFe/CConSitNFeXmldsigCoreSchemaV101SignatureValueType';

import { CConSitNFeXmldsigCoreSchemaV101SignedInfoType } from '../../classes/ConSitNFe/CConSitNFeXmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IConSitNFeXmldsigCoreSchemaV101SignatureType.
 */
export interface IConSitNFeXmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CConSitNFeXmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CConSitNFeXmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CConSitNFeXmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
