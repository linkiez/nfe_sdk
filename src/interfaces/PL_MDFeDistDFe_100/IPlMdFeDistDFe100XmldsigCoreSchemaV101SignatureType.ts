import { CPlMdFeDistDFe100XmldsigCoreSchemaV101KeyInfoType } from '../../classes/PL_MDFeDistDFe_100/CPlMdFeDistDFe100XmldsigCoreSchemaV101KeyInfoType';

import { CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureValueType } from '../../classes/PL_MDFeDistDFe_100/CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureValueType';

import { CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType } from '../../classes/PL_MDFeDistDFe_100/CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureType.
 */
export interface IPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CPlMdFeDistDFe100XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
