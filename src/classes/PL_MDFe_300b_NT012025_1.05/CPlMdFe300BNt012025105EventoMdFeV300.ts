import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105EventoMdFeV300EventoMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105EventoMdFeV300EventoMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105EventoMdFeV300.
 */
export class CPlMdFe300BNt012025105EventoMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property evento MDFe.
   */
  public eventoMDFe?: TPlMdFe300BNt012025105EventoMdFeV300EventoMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EventoMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105EventoMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EventoMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105EventoMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['eventoMDFe']);
    }
  }
}
