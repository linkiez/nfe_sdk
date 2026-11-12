import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp';

/**
 * Informações da NF-e
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Chave de acesso da NF-e
   */
  chNFe?: unknown;
  /**
   * Schema property Seg Cod Barra.
   */
  SegCodBarra?: unknown;
  /**
   * Tipo Dados Unidade de Transporte
   */
  infUnidTransp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp[];
  /**
   * Preenchido quando for transporte de produtos classificados pela ONU como perigosos.
   */
  peri?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri;
}
