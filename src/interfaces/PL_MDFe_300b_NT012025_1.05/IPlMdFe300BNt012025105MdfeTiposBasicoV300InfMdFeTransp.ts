import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp';

/**
 * Manifesto Eletrônico de Documentos Fiscais. Somente para modal Aquaviário (vide regras MOC)
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Manifesto Eletrônico de Documentos Fiscais
   */
  chMDFe?: unknown;
  /**
   * Informações das Unidades de Transporte (Carreta/Reboque/Vagão) Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.
   */
  infUnidTransp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp[];
  /**
   * Preenchido quando for transporte de produtos classificados pela ONU como perigosos.
   */
  peri?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri;
}
