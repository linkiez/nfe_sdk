import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFeDistDFe100XmldsigCoreSchemaV101Signature } from '../../types/PL_MDFeDistDFe_100/TPlMdFeDistDFe100XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101.
 */
export class CPlMdFeDistDFe100XmldsigCoreSchemaV101 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property signature.
   */
  public signature?: TPlMdFeDistDFe100XmldsigCoreSchemaV101Signature;

  /**
   * Creates a new schema-backed CPlMdFeDistDFe100XmldsigCoreSchemaV101 instance.
   * Schema context: Runtime class for CPlMdFeDistDFe100XmldsigCoreSchemaV101.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFeDistDFe100XmldsigCoreSchemaV101) {
    this['@class'] = '.CPlMdFeDistDFe100XmldsigCoreSchemaV101';

    if (props) {
      assignSchemaProperties(this, props, ['signature']);
    }
  }
}
