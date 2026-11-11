import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformUri } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformType.
 */
export class CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformType {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property XPath.
   */
  public XPath?: string;
  /**
   * Schema attribute algorithm.
   */
  public $Algorithm?: TPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformUri;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformType instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformType.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformType,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformType';

    if (props) {
      assignSchemaProperties(this, props, ['XPath', '$Algorithm']);
    }
  }
}
