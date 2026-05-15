import { CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoAverbPlV101XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoAverbPlV101XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoAverbPlV101XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoAverbPlV101XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoAverbPlV101XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
