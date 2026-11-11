import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105RetDistMdFeV300RetDistMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105RetDistMdFeV300RetDistMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105RetDistMdFeV300.
 */
export class CPlMdFe300BNt012025105RetDistMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property ret Dist MDFe.
   */
  public retDistMDFe?: TPlMdFe300BNt012025105RetDistMdFeV300RetDistMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105RetDistMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105RetDistMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105RetDistMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105RetDistMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['retDistMDFe']);
    }
  }
}
