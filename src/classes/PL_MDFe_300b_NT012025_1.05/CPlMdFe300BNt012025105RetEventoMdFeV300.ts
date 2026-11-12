import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105RetEventoMdFeV300RetEventoMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105RetEventoMdFeV300RetEventoMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105RetEventoMdFeV300.
 */
export class CPlMdFe300BNt012025105RetEventoMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property ret Evento MDFe.
   */
  public retEventoMDFe?: TPlMdFe300BNt012025105RetEventoMdFeV300RetEventoMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105RetEventoMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105RetEventoMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105RetEventoMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105RetEventoMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['retEventoMDFe']);
    }
  }
}
