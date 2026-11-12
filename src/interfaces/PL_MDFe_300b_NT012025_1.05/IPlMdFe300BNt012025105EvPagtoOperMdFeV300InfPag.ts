import { CPlMdFe300BNt012025105EvPagtoOperMdFeV300Comp } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EvPagtoOperMdFeV300Comp';

import { CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPrazo } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPrazo';

/**
 * Informações do Pagamento do Frete
 */
export interface IPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Componentes do Pagamentoi do Frete
   */
  Comp?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300Comp;
  /**
   * Valor Total do Contrato
   */
  vContrato?: unknown;
  /**
   * Valor do Adiantamento (usar apenas em pagamento à Prazo
   */
  vAdiant?: unknown;
  /**
   * Informações do pagamento a prazo. Informar somente se indPag for à Prazo
   */
  infPrazo?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPrazo;
}
