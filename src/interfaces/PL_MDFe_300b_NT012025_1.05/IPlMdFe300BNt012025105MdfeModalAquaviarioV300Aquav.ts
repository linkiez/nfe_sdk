import { CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfEmbComb } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfEmbComb';

import { CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermCarreg } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermCarreg';

import { CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermDescarreg } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermDescarreg';

import { CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidCargaVazia } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidCargaVazia';

import { CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidTranspVazia } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidTranspVazia';

/**
 * Informações do modal Aquaviário
 */
export interface IPlMdFe300BNt012025105MdfeModalAquaviarioV300Aquav {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Grupo de informações dos terminais de carregamento.
   */
  infTermCarreg?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermCarreg;
  /**
   * Grupo de informações dos terminais de descarregamento.
   */
  infTermDescarreg?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfTermDescarreg;
  /**
   * Informações das Embarcações do Comboio
   */
  infEmbComb?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfEmbComb;
  /**
   * Informações das Undades de Carga vazias
   */
  infUnidCargaVazia?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidCargaVazia;
  /**
   * Informações das Undades de Transporte vazias
   */
  infUnidTranspVazia?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidTranspVazia;
}
