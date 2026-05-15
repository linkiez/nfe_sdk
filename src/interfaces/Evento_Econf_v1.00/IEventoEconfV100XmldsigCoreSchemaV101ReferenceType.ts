import { CEventoEconfV100XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100XmldsigCoreSchemaV101TransformsType';

import { TEventoEconfV100XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_Econf_v1.00/TEventoEconfV100XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoEconfV100XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoEconfV100XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoEconfV100XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoEconfV100XmldsigCoreSchemaV101DigestValueType;
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
