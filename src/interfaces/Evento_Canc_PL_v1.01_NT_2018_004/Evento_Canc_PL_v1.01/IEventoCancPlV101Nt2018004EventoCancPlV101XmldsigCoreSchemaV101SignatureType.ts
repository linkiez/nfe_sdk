import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType } from '../../../classes/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType } from '../../../classes/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType } from '../../../classes/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoCancPlV101Nt2018004EventoCancPlV101XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
