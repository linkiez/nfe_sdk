import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105XmldsigCoreSchemaV101Signature } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105XmldsigCoreSchemaV101Signature';

/**
 * Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101.
 */
export class CPlMdFe300BNt012025105XmldsigCoreSchemaV101 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property signature.
   */
  public signature?: TPlMdFe300BNt012025105XmldsigCoreSchemaV101Signature;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105XmldsigCoreSchemaV101 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105XmldsigCoreSchemaV101.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105XmldsigCoreSchemaV101) {
    this['@class'] = '.CPlMdFe300BNt012025105XmldsigCoreSchemaV101';

    if (props) {
      assignSchemaProperties(this, props, ['signature']);
    }
  }
}
