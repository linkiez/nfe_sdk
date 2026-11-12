import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag } from './CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag';

import { CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfViagens } from './CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfViagens';

/**
 * Schema XML de validação do evento de pagamento da operação de transporte 110116
 */
export class CPlMdFe300BNt012025105EvPagtoOperMdFeV300EvPagtoOperMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Número do Protocolo de Status do MDF-e. 1 posição tipo de autorizador (9 - SEFAZ Nacional ); 2 posições ano; 10 seqüencial no ano.
   */
  public nProt?: unknown;
  /**
   * Informações do total de viagens acobertadas pelo Evento “pagamento do frete”
   */
  public infViagens?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfViagens;
  /**
   * Informações do Pagamento do Frete
   */
  public infPag?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvPagtoOperMdFeV300EvPagtoOperMdFe instance.
   * Schema context: Schema XML de validação do evento de pagamento da operação de transporte 110116
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300EvPagtoOperMdFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105EvPagtoOperMdFeV300EvPagtoOperMdFe';

    if (props) {
      assignSchemaProperties(this, props, ['nProt']);
      this.infViagens = props.infViagens
        ? new CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfViagens(
            props.infViagens,
          )
        : undefined;
      this.infPag = props.infPag
        ? new CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag(props.infPag)
        : undefined;
    }
  }
}
