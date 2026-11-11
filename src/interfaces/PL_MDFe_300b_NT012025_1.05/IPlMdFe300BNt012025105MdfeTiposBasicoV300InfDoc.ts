import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga';

/**
 * Informações dos Documentos fiscais vinculados ao manifesto
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações dos Municípios de descarregamento
   */
  infMunDescarga?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga;
}
