import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105RetMdFeConsultaDFeV300RetMdFeConsultaDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105RetMdFeConsultaDFeV300RetMdFeConsultaDFe';

/**
 * Runtime class for CPlMdFe300BNt012025105RetMdFeConsultaDFeV300.
 */
export class CPlMdFe300BNt012025105RetMdFeConsultaDFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property ret MDFe Consulta DFe.
   */
  public retMDFeConsultaDFe?: TPlMdFe300BNt012025105RetMdFeConsultaDFeV300RetMdFeConsultaDFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105RetMdFeConsultaDFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105RetMdFeConsultaDFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105RetMdFeConsultaDFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105RetMdFeConsultaDFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['retMDFeConsultaDFe']);
    }
  }
}
