import { CConSitNFeXmldsigCoreSchemaV101TransformsType } from '../../classes/ConSitNFe/CConSitNFeXmldsigCoreSchemaV101TransformsType';

import { TConSitNFeXmldsigCoreSchemaV101DigestValueType } from '../../types/ConSitNFe/TConSitNFeXmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IConSitNFeXmldsigCoreSchemaV101ReferenceType.
 */
export interface IConSitNFeXmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CConSitNFeXmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TConSitNFeXmldsigCoreSchemaV101DigestValueType;
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
