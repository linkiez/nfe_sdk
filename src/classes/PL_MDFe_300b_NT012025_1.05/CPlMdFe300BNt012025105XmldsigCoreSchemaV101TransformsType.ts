import { CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformType } from './CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType.
 */
export class CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property Transform.
   */
  public Transform?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformType;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformsType';

    if (props) {
      this.Transform = props.Transform
        ? new CPlMdFe300BNt012025105XmldsigCoreSchemaV101TransformType(
            props.Transform,
          )
        : undefined;
    }
  }
}
