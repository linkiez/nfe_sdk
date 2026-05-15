import { CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_SuframaInternaliza_PL_v1.01/CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoSuframaInternalizaPlV101XmldsigCoreSchemaV101DigestValueType;
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
