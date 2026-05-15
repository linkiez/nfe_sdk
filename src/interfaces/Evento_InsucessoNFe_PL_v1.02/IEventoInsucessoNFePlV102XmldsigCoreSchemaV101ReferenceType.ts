import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType';

import { TEventoInsucessoNFePlV102XmldsigCoreSchemaV101DigestValueType } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoInsucessoNFePlV102XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoInsucessoNFePlV102XmldsigCoreSchemaV101DigestValueType;
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
