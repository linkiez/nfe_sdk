import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType } from './CPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType.
 */
export class CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property Reference.
   */
  public Reference?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType;
  /**
   * Schema attribute id.
   */
  public $Id?: string;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105XmldsigCoreSchemaV101SignedInfoType';

    if (props) {
      this.Reference = props.Reference
        ? new CPlMdFe300BNt012025105XmldsigCoreSchemaV101ReferenceType(
            props.Reference,
          )
        : undefined;
      assignSchemaProperties(this, props, ['$Id']);
    }
  }
}
