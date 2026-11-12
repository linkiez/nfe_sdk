import { CPlMdFe300BNt012025105LeiauteDistMdFeV300Proc } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105LeiauteDistMdFeV300Proc';

import { TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe';

/**
 * Schema XML de validação da área de dados descompactada
 */
export interface IPlMdFe300BNt012025105LeiauteDistMdFeV300LoteDistDFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * informação do proc
   */
  proc?: CPlMdFe300BNt012025105LeiauteDistMdFeV300Proc;
  /**
   * Tipo Versão
   */
  $versao?: TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe;
}
