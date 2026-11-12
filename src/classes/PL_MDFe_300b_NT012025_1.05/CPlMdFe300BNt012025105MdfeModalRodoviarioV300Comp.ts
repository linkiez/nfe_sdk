import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Componentes do Pagamentoi do Contrato
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300Comp {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Valor do componente
   */
  public vComp?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300Comp instance.
   * Schema context: Componentes do Pagamentoi do Contrato
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Comp,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300Comp';

    if (props) {
      assignSchemaProperties(this, props, ['vComp']);
    }
  }
}
