import { CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag';

import { CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfViagens } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfViagens';

/**
 * Schema XML de validação do evento de pagamento da operação de transporte 110116
 */
export interface IPlMdFe300BNt012025105EvPagtoOperMdFeV300EvPagtoOperMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Número do Protocolo de Status do MDF-e. 1 posição tipo de autorizador (9 - SEFAZ Nacional ); 2 posições ano; 10 seqüencial no ano.
   */
  nProt?: unknown;
  /**
   * Informações do total de viagens acobertadas pelo Evento “pagamento do frete”
   */
  infViagens?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfViagens;
  /**
   * Informações do Pagamento do Frete
   */
  infPag?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag;
}
