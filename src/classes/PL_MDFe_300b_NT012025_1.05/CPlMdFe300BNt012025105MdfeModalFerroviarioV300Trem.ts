import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações da composição do trem
 */
export class CPlMdFe300BNt012025105MdfeModalFerroviarioV300Trem {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Data e hora de liberação do trem na origem
   */
  public dhTrem?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalFerroviarioV300Trem instance.
   * Schema context: Informações da composição do trem
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalFerroviarioV300Trem,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalFerroviarioV300Trem';

    if (props) {
      assignSchemaProperties(this, props, ['dhTrem']);
    }
  }
}
