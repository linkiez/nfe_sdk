import { CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidCarga } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidCarga';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300Container } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300Container';

/**
 * Tipo Dados Unidade de Carga
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo da Unidade de Carga 1 - Container; 2 - ULD; 3 - Pallet; 4 - Outros;
   */
  tpUnidCarga?: unknown;
  /**
   * Identificação da Unidade de Carga Informar a identificação da unidade de carga, por exemplo: número do container.
   */
  idUnidCarga?: TPlMdFe300BNt012025105MdfeTiposBasicoV300Container;
  /**
   * Lacres das Unidades de Carga
   */
  lacUnidCarga?: CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidCarga;
}
