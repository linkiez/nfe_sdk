import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações do pagamento a prazo.
 */
export class CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPrazo {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Data de vencimento da Parcela (AAAA-MM-DD)
   */
  public dVenc?: unknown;
  /**
   * Valor da Parcela
   */
  public vParcela?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPrazo instance.
   * Schema context: Informações do pagamento a prazo.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPrazo,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPrazo';

    if (props) {
      assignSchemaProperties(this, props, ['dVenc', 'vParcela']);
    }
  }
}
