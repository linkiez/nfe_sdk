import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType } from './CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType';

import { CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureValueType } from './CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureValueType';

import { CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType } from './CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureType.
 */
export class CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property Signed Info.
   */
  public SignedInfo?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  public SignatureValue?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  public KeyInfo?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  public $Id?: string;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureType instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureType.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureType,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureType';

    if (props) {
      this.SignedInfo = props.SignedInfo
        ? new CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType(
            props.SignedInfo,
          )
        : undefined;
      this.SignatureValue = props.SignatureValue
        ? new CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignatureValueType(
            props.SignatureValue,
          )
        : undefined;
      this.KeyInfo = props.KeyInfo
        ? new CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType(
            props.KeyInfo,
          )
        : undefined;
      assignSchemaProperties(this, props, ['$Id']);
    }
  }
}
