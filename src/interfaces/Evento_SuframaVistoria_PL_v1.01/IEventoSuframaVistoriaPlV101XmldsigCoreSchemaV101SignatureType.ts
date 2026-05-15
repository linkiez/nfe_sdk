import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_SuframaVistoria_PL_v1.01/CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_SuframaVistoria_PL_v1.01/CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_SuframaVistoria_PL_v1.01/CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
