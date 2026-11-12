import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Grupo de informações da Entrega Parcial (Corte de Voo)
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfEntregaParcial {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Quantidade total de volumes
   */
  public qtdTotal?: unknown;
  /**
   * Quantidade de volumes enviados no MDF-e
   */
  public qtdParcial?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfEntregaParcial instance.
   * Schema context: Grupo de informações da Entrega Parcial (Corte de Voo)
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfEntregaParcial,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfEntregaParcial';

    if (props) {
      assignSchemaProperties(this, props, ['qtdTotal', 'qtdParcial']);
    }
  }
}
