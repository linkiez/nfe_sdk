import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType } from '../../../classes/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType';

import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType } from '../../../classes/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType';

import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType } from '../../../classes/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType';

/**
 * Type contract for IEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType.
 */
export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Signed Info.
   */
  SignedInfo?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  SignatureValue?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  KeyInfo?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  $Id?: string;
}
