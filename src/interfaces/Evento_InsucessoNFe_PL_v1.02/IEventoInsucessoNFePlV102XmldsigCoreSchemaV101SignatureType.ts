import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType';

import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType';

import { CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoInsucessoNFePlV102XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
