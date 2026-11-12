import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300Comp } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300Comp';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfPrazo } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfPrazo';

/**
 * Informações do Pagamento do Contrato
 */
export interface IPlMdFe300BNt012025105MdfeModalRodoviarioV300InfPag {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Componentes do Pagamentoi do Contrato
   */
  Comp?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Comp;
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
  infPrazo?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfPrazo;
}
