import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
