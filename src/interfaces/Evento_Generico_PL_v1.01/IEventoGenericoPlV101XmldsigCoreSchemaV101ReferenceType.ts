import { CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_Generico_PL_v1.01/CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoGenericoPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoGenericoPlV101XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoGenericoPlV101XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoGenericoPlV101XmldsigCoreSchemaV101DigestValueType;
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
