import { CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType } from '../../../classes/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType';

import { TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101DigestValueType } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType.
 */
export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TEventoCancSubstV101Nt2018004EventoCancSubstV101XmldsigCoreSchemaV101DigestValueType;
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
