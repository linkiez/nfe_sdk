import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105RetConsStatServMdFeV300RetConsStatServMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105RetConsStatServMdFeV300RetConsStatServMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105RetConsStatServMdFeV300.
 */
export class CPlMdFe300BNt012025105RetConsStatServMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property ret Cons Stat Serv MDFe.
   */
  public retConsStatServMDFe?: TPlMdFe300BNt012025105RetConsStatServMdFeV300RetConsStatServMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105RetConsStatServMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105RetConsStatServMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105RetConsStatServMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105RetConsStatServMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['retConsStatServMDFe']);
    }
  }
}
