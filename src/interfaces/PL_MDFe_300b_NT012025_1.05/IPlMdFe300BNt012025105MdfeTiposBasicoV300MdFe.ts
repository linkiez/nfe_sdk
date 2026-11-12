import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeSupl } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeSupl';

/**
 * Tipo Manifesto de Documentos Fiscais Eletrônicos
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Informações do MDF-e
   */
  infMDFe?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe;
  /**
   * Informações suplementares do MDF-e
   */
  infMDFeSupl?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeSupl;
}
