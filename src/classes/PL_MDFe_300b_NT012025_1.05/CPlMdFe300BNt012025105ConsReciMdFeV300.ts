import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105ConsReciMdFeV300ConsReciMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsReciMdFeV300ConsReciMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105ConsReciMdFeV300.
 */
export class CPlMdFe300BNt012025105ConsReciMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property cons Reci MDFe.
   */
  public consReciMDFe?: TPlMdFe300BNt012025105ConsReciMdFeV300ConsReciMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsReciMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105ConsReciMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105ConsReciMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105ConsReciMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['consReciMDFe']);
    }
  }
}
