import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Sigla das Unidades da Federação do percurso do veículo.
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPercurso {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Sigla das Unidades da Federação do percurso do veículo. Não é necessário repetir as UF de Início e Fim
   */
  public UFPer?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPercurso instance.
   * Schema context: Sigla das Unidades da Federação do percurso do veículo.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPercurso,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPercurso';

    if (props) {
      assignSchemaProperties(this, props, ['UFPer']);
    }
  }
}
