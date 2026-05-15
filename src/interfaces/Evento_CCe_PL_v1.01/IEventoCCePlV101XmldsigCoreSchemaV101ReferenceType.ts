import { CEventoCCePlV101XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_CCe_PL_v1.01/CEventoCCePlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoCCePlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoCCePlV101XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoCCePlV101XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoCCePlV101XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoCCePlV101XmldsigCoreSchemaV101DigestValueType;
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
