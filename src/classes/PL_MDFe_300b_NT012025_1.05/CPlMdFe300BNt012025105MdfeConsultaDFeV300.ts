import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105MdfeConsultaDFeV300MdfeConsultaDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeConsultaDFeV300MdfeConsultaDFe';

/**
 * Runtime class for CPlMdFe300BNt012025105MdfeConsultaDFeV300.
 */
export class CPlMdFe300BNt012025105MdfeConsultaDFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property mdfe Consulta DFe.
   */
  public mdfeConsultaDFe?: TPlMdFe300BNt012025105MdfeConsultaDFeV300MdfeConsultaDFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeConsultaDFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105MdfeConsultaDFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeConsultaDFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeConsultaDFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['mdfeConsultaDFe']);
    }
  }
}
