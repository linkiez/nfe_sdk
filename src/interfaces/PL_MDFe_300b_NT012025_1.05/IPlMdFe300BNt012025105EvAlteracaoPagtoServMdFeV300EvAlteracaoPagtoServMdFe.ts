import { CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300InfPag } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300InfPag';

/**
 * Schema XML de validação do evento de alteração do pagamento do serviçp de transporte 110118
 */
export interface IPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300EvAlteracaoPagtoServMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Número do Protocolo de Status do MDF-e.
   */
  nProt?: unknown;
  /**
   * Informações do Pagamento do Frete
   */
  infPag?: CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300InfPag;
}
