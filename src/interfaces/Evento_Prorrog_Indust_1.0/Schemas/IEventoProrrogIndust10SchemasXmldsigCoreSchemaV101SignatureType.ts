import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType';

import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType';

import { CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoProrrogIndust10SchemasXmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
