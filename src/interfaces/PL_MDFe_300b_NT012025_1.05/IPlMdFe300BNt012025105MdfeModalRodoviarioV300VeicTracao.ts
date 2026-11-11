import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300Condutor } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300Condutor';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop';

/**
 * Dados do Veículo com a Tração
 */
export interface IPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Proprietário ou possuidor do Veículo. Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e
   */
  prop?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop;
  /**
   * Informações do(s) Condutor(es) do veículo
   */
  condutor?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Condutor;
  /**
   * UF em que veículo está licenciado Sigla da UF de licenciamento do veículo.
   */
  UF?: unknown;
}
