import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_SuframaInternaliza_PL_v1.01/CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_SuframaInternaliza_PL_v1.01/CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_SuframaInternaliza_PL_v1.01/CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
