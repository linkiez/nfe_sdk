import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105RetEnviMdFeV300RetEnviMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105RetEnviMdFeV300RetEnviMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105RetEnviMdFeV300.
 */
export class CPlMdFe300BNt012025105RetEnviMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property ret Envi MDFe.
   */
  public retEnviMDFe?: TPlMdFe300BNt012025105RetEnviMdFeV300RetEnviMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105RetEnviMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105RetEnviMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105RetEnviMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105RetEnviMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['retEnviMDFe']);
    }
  }
}
