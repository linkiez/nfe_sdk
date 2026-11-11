import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105EnviMdFeV300EnviMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105EnviMdFeV300EnviMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105EnviMdFeV300.
 */
export class CPlMdFe300BNt012025105EnviMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property envi MDFe.
   */
  public enviMDFe?: TPlMdFe300BNt012025105EnviMdFeV300EnviMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EnviMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105EnviMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EnviMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105EnviMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['enviMDFe']);
    }
  }
}
