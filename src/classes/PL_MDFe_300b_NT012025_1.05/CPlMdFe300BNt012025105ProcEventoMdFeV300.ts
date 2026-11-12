import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105ProcEventoMdFeV300ProcEventoMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ProcEventoMdFeV300ProcEventoMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105ProcEventoMdFeV300.
 */
export class CPlMdFe300BNt012025105ProcEventoMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property proc Evento MDFe.
   */
  public procEventoMDFe?: TPlMdFe300BNt012025105ProcEventoMdFeV300ProcEventoMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ProcEventoMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105ProcEventoMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105ProcEventoMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105ProcEventoMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['procEventoMDFe']);
    }
  }
}
