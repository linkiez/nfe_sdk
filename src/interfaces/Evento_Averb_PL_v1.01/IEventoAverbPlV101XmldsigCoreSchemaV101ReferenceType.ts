import { CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoAverbPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoAverbPlV101XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoAverbPlV101XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoAverbPlV101XmldsigCoreSchemaV101DigestValueType;
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
