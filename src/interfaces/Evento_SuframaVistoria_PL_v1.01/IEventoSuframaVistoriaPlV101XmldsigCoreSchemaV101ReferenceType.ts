import { CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_SuframaVistoria_PL_v1.01/CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoSuframaVistoriaPlV101XmldsigCoreSchemaV101DigestValueType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
  /**
   * Schema attribute uri.
   */
  $URI?: any;
  /**
   * Schema attribute type.
   */
  $Type?: string;
}
