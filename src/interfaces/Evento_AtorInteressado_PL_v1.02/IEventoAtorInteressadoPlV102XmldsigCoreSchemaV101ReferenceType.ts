import { CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_AtorInteressado_PL_v1.02/CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType';

import { TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoAtorInteressadoPlV102XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoAtorInteressadoPlV102XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoAtorInteressadoPlV102XmldsigCoreSchemaV101DigestValueType;
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
