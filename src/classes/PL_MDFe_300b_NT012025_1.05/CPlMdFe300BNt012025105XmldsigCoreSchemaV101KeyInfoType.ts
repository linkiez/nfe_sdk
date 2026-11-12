import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105XmldsigCoreSchemaV101X509DataType } from './CPlMdFe300BNt012025105XmldsigCoreSchemaV101X509DataType';

/**
 * Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType.
 */
export class CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property X509 Data.
   */
  public X509Data?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101X509DataType;
  /**
   * Schema attribute id.
   */
  public $Id?: string;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105XmldsigCoreSchemaV101KeyInfoType';

    if (props) {
      this.X509Data = props.X509Data
        ? new CPlMdFe300BNt012025105XmldsigCoreSchemaV101X509DataType(
            props.X509Data,
          )
        : undefined;
      assignSchemaProperties(this, props, ['$Id']);
    }
  }
}
