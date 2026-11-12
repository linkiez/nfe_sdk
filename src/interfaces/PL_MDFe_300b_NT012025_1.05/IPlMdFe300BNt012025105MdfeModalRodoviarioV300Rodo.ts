import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300LacRodo } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300LacRodo';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao';

/**
 * Informações do modal Rodoviário
 */
export interface IPlMdFe300BNt012025105MdfeModalRodoviarioV300Rodo {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Grupo de informações para Agência Reguladora
   */
  infANTT?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt;
  /**
   * Dados do Veículo com a Tração
   */
  veicTracao?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao;
  /**
   * Dados dos reboques Código interno do veículo
   */
  veicReboque?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque;
  /**
   * Lacres
   */
  lacRodo?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300LacRodo;
}
