import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfLotacao } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfLotacao';

/**
 * Produto predominante
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações da carga lotação. Informar somente quando MDF-e for de carga lotação
   */
  infLotacao?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfLotacao;
}
