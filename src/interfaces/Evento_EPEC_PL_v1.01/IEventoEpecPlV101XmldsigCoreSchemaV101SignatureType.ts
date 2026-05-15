import { CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoEpecPlV101XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoEpecPlV101XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoEpecPlV101XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoEpecPlV101XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoEpecPlV101XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
