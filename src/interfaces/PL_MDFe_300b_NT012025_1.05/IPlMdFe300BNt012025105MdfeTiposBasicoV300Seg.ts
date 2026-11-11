import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfResp } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfResp';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSeg } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSeg';

/**
 * Informações de Seguro da Carga
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300Seg {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do responsável pelo seguro da carga
   */
  infResp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfResp;
  /**
   * Informações da seguradora
   */
  infSeg?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSeg;
}
