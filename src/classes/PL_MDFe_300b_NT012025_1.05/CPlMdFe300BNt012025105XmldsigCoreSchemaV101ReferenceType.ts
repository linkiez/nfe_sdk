import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType } from './CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType';

import { TPlMdFe300BNt012025105XmldsigCoreSchemaV101DigestValueType } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105XmldsigCoreSchemaV101DigestValueType';

/**
 * Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType.
 */
export class CPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property Transforms.
   */
  public Transforms?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType;
  /**
   * Schema property Digest Value.
   */
  public DigestValue?: TPlMdFe300BNt012025105XmldsigCoreSchemaV101DigestValueType;
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
   * Creates a new schema-backed CPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType';

    if (props) {
      this.Transforms = props.Transforms
        ? new CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType(
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
