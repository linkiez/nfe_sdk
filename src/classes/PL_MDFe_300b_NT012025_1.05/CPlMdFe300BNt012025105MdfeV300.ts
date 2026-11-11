import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105MdfeV300MdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeV300MdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105MdfeV300.
 */
export class CPlMdFe300BNt012025105MdfeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property m DFe.
   */
  public mDFe?: TPlMdFe300BNt012025105MdfeV300MdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105MdfeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeV300';

    if (props) {
      assignSchemaProperties(this, props, ['mDFe']);
    }
  }
}
