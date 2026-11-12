import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105ConsStatServMdFeV300ConsStatServMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsStatServMdFeV300ConsStatServMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105ConsStatServMdFeV300.
 */
export class CPlMdFe300BNt012025105ConsStatServMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property cons Stat Serv MDFe.
   */
  public consStatServMDFe?: TPlMdFe300BNt012025105ConsStatServMdFeV300ConsStatServMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsStatServMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105ConsStatServMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105ConsStatServMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105ConsStatServMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['consStatServMDFe']);
    }
  }
}
