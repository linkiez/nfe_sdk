import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoManifestaDestPlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoManifestaDestPlV101XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoManifestaDestPlV101XmldsigCoreSchemaV101DigestValueType;
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
