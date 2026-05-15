import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType';

import { TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101DigestValueType } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoProrrogIndust10SchemasXmldsigCoreSchemaV101DigestValueType;
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
