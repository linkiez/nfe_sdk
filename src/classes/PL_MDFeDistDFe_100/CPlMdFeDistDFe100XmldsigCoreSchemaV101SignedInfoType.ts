import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType } from './CPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType';

/**
 * Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType.
 */
export class CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property Reference.
   */
  public Reference?: CPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType;
  /**
   * Schema attribute id.
   */
  public $Id?: string;

  /**
   * Creates a new schema-backed CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType instance.
   * Schema context: Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType,
  ) {
    this['@class'] = '.CPlMdFeDistDFe100XmldsigCoreSchemaV101SignedInfoType';

    if (props) {
      this.Reference = props.Reference
        ? new CPlMdFeDistDFe100XmldsigCoreSchemaV101ReferenceType(
            props.Reference,
          )
        : undefined;
      assignSchemaProperties(this, props, ['$Id']);
    }
  }
}
