import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType } from './CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType';

import { TPlMdFeDistDFe100XmldsigCoreSchemaV101DigestValueType } from '../../types/PL_MDFeDistDFe_100/TPlMdFeDistDFe100XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType.
 */
export class CPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property Transforms.
   */
  public Transforms?: CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  public DigestValue?: TPlMdFeDistDFe100XmldsigCoreSchemaV101DigestValueType;
  /**
   * Schema attribute id.
   */
  public $Id?: string;
  /**
   * Schema attribute uri.
   */
  public $URI?: any;
  /**
   * Schema attribute type.
   */
  public $Type?: string;

  /**
   * Creates a new schema-backed CPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType instance.
   * Schema context: Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType,
  ) {
    this['@class'] = '.CPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType';

    if (props) {
      this.Transforms = props.Transforms
        ? new CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType(
            props.Transforms,
          )
        : undefined;
      assignSchemaProperties(this, props, [
        'DigestValue',
        '$Id',
        '$URI',
        '$Type',
      ]);
    }
  }
}
