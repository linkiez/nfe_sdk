import { CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformType } from './CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformType';

/**
 * Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType.
 */
export class CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property Transform.
   */
  public Transform?: CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformType;

  /**
   * Creates a new schema-backed CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType instance.
   * Schema context: Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType,
  ) {
    this['@class'] = '.CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformsType';

    if (props) {
      this.Transform = props.Transform
        ? new CPlMdFeDistDFe100XmldsigCoreSchemaV101TransformType(
            props.Transform,
          )
        : undefined;
    }
  }
}
