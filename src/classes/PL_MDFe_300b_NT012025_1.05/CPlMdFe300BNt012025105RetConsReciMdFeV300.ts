import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105RetConsReciMdFeV300RetConsReciMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105RetConsReciMdFeV300RetConsReciMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105RetConsReciMdFeV300.
 */
export class CPlMdFe300BNt012025105RetConsReciMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property ret Cons Reci MDFe.
   */
  public retConsReciMDFe?: TPlMdFe300BNt012025105RetConsReciMdFeV300RetConsReciMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105RetConsReciMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105RetConsReciMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105RetConsReciMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105RetConsReciMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['retConsReciMDFe']);
    }
  }
}
