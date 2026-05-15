import { CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_Generico_PL_v1.01/CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_Generico_PL_v1.01/CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_Generico_PL_v1.01/CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoGenericoPlV101XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoGenericoPlV101XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoGenericoPlV101XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
