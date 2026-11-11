import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfEntregaParcial } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfEntregaParcial';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp';

/**
 * Conhecimentos de Tranporte - usar este grupo quando for prestador de serviço de transporte
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Conhecimento Eletrônico - Chave de Acesso
   */
  chCTe?: unknown;
  /**
   * Segundo código de barras
   */
  SegCodBarra?: unknown;
  /**
   * Informações das Unidades de Transporte (Carreta/Reboque/Vagão) Deve ser preenchido com as informações das unidades de transporte utilizadas.
   */
  infUnidTransp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp[];
  /**
   * Preenchido quando for transporte de produtos classificados pela ONU como perigosos.
   */
  peri?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri;
  /**
   * Grupo de informações da Entrega Parcial (Corte de Voo)
   */
  infEntregaParcial?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfEntregaParcial;
}
