import { CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoEpecPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoEpecPlV101XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoEpecPlV101XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoEpecPlV101XmldsigCoreSchemaV101DigestValueType;
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
