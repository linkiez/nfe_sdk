import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe';

/**
 * Informações dos Municípios de descarregamento
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do Município de Descarregamento
   */
  cMunDescarga?: unknown;
  /**
   * Conhecimentos de Tranporte - usar este grupo quando for prestador de serviço de transporte
   */
  infCTe?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe;
  /**
   * Nota Fiscal Eletronica
   */
  infNFe?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe;
  /**
   * Manifesto Eletrônico de Documentos Fiscais. Somente para modal Aquaviário (vide regras MOC)
   */
  infMDFeTransp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp;
}
