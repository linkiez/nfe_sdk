import { CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType } from '../../classes/PL_MDFeDistDFe_100/CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType';

import { TPlMdFeDistDFe100XmldsigCoreSchemaV101DigestValueType } from '../../types/PL_MDFeDistDFe_100/TPlMdFeDistDFe100XmldsigCoreSchemaV101DigestValueType';

/**
 * Type contract for IPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType.
 */
export interface IPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property Transforms.
   */
  Transforms?: CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  DigestValue?: TPlMdFeDistDFe100XmldsigCoreSchemaV101DigestValueType;
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
