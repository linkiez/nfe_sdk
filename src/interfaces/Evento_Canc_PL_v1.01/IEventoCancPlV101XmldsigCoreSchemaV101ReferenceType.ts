import { CEventoCancPlV101XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_Canc_PL_v1.01/CEventoCancPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoCancPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoCancPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoCancPlV101XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoCancPlV101XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoCancPlV101XmldsigCoreSchemaV101DigestValueType;
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
