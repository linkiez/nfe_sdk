import { CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_CCe_PL_v1.01/CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_CCe_PL_v1.01/CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_CCe_PL_v1.01/CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoCCePlV101XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoCCePlV101XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoCCePlV101XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoCCePlV101XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoCCePlV101XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
