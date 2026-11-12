import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFeDistDFe100XmldsigCoreSchemaV101TransformUri } from '../../types/PL_MDFeDistDFe_100/TPlMdFeDistDFe100XmldsigCoreSchemaV101TransformUri';

/**
 * Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformType.
 */
export class CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformType {
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
  public $Algorithm?: TPlMdFeDistDFe100XmldsigCoreSchemaV101TransformUri;

  /**
   * Creates a new schema-backed CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformType instance.
   * Schema context: Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformType.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformType,
  ) {
    this['@class'] = '.CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformType';

    if (props) {
      assignSchemaProperties(this, props, ['XPath', '$Algorithm']);
    }
  }
}
