import { CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType';

import { TPl010CNt2022002V130XmldsigCoreSchemaV101DigestValueType } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType.
 */
export interface IPl010CNt2022002V130XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CPl010CNt2022002V130XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TPl010CNt2022002V130XmldsigCoreSchemaV101DigestValueType;
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
