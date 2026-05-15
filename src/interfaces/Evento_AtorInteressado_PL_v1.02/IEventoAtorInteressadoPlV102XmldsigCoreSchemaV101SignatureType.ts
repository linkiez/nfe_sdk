import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_AtorInteressado_PL_v1.02/CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType';

import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_AtorInteressado_PL_v1.02/CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType';

import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_AtorInteressado_PL_v1.02/CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
