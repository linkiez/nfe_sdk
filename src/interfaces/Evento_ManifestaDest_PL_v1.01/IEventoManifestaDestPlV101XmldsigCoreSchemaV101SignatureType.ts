import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoManifestaDestPlV101XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
