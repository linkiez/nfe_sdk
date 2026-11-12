import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * informações dos Vagões
 */
export class CPlMdFe300BNt012025105MdfeModalFerroviarioV300Vag {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Peso Base de Cálculo de Frete em Toneladas
   */
  public pesoBC?: unknown;
  /**
   * Peso Real em Toneladas
   */
  public pesoR?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalFerroviarioV300Vag instance.
   * Schema context: informações dos Vagões
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalFerroviarioV300Vag,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalFerroviarioV300Vag';

    if (props) {
      assignSchemaProperties(this, props, ['pesoBC', 'pesoR']);
    }
  }
}
