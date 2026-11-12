import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Mensagem do Fisco
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfFisco {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Mensagem do Fisco
   */
  public xMsg?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfFisco instance.
   * Schema context: Mensagem do Fisco
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfFisco,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfFisco';

    if (props) {
      assignSchemaProperties(this, props, ['xMsg']);
    }
  }
}
