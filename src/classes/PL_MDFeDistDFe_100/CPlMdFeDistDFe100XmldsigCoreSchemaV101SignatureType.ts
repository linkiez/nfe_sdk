import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFeDistDFe100XmldsigCoreSchemaV101KeyInfoType } from './CPlMdFeDistDFe100XmldsigCoreSchemaV101KeyInfoType';

import { CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureValueType } from './CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureValueType';

import { CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType } from './CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType';

/**
 * Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureType.
 */
export class CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureType {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property Signed Info.
   */
  public SignedInfo?: CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType;
  /**
   * Schema property Signature Value.
   */
  public SignatureValue?: CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureValueType;
  /**
   * Schema property Key Info.
   */
  public KeyInfo?: CPlMdFeDistDFe100XmldsigCoreSchemaV101KeyInfoType;
  /**
   * Schema attribute id.
   */
  public $Id?: string;

  /**
   * Creates a new schema-backed CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureType instance.
   * Schema context: Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureType.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureType,
  ) {
    this['@class'] = '.CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureType';

    if (props) {
      this.SignedInfo = props.SignedInfo
        ? new CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType(
            props.SignedInfo,
          )
        : undefined;
      this.SignatureValue = props.SignatureValue
        ? new CPlMdFeDistDFe100XmldsigCoreSchemaV101SignatureValueType(
            props.SignatureValue,
          )
        : undefined;
      this.KeyInfo = props.KeyInfo
        ? new CPlMdFeDistDFe100XmldsigCoreSchemaV101KeyInfoType(props.KeyInfo)
        : undefined;
      assignSchemaProperties(this, props, ['$Id']);
    }
  }
}
