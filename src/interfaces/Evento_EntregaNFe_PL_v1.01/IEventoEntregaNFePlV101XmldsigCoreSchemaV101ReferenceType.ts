import { CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType';

import { TEventoEntregaNFePlV101XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoEntregaNFePlV101XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoEntregaNFePlV101XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoEntregaNFePlV101XmldsigCoreSchemaV101DigestValueType;
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
