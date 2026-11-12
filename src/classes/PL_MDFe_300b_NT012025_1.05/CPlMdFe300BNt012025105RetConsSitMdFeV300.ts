import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105RetConsSitMdFeV300RetConsSitMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105RetConsSitMdFeV300RetConsSitMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105RetConsSitMdFeV300.
 */
export class CPlMdFe300BNt012025105RetConsSitMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property ret Cons Sit MDFe.
   */
  public retConsSitMDFe?: TPlMdFe300BNt012025105RetConsSitMdFeV300RetConsSitMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105RetConsSitMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105RetConsSitMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105RetConsSitMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105RetConsSitMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['retConsSitMDFe']);
    }
  }
}
