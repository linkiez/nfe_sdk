import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Componentes do Pagamentoi do Frete
 */
export class CPlMdFe300BNt012025105EvPagtoOperMdFeV300Comp {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Valor do componente
   */
  public vComp?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvPagtoOperMdFeV300Comp instance.
   * Schema context: Componentes do Pagamentoi do Frete
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300Comp) {
    this['@class'] = '.CPlMdFe300BNt012025105EvPagtoOperMdFeV300Comp';

    if (props) {
      assignSchemaProperties(this, props, ['vComp']);
    }
  }
}
