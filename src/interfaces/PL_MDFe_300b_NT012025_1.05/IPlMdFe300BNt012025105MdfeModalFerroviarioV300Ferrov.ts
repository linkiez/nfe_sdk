import { CPlMdFe300BNt012025105MdfeModalFerroviarioV300Trem } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalFerroviarioV300Trem';

import { CPlMdFe300BNt012025105MdfeModalFerroviarioV300Vag } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalFerroviarioV300Vag';

/**
 * Informações do modal Ferroviário
 */
export interface IPlMdFe300BNt012025105MdfeModalFerroviarioV300Ferrov {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações da composição do trem
   */
  trem?: CPlMdFe300BNt012025105MdfeModalFerroviarioV300Trem;
  /**
   * informações dos Vagões
   */
  vag?: CPlMdFe300BNt012025105MdfeModalFerroviarioV300Vag;
}
