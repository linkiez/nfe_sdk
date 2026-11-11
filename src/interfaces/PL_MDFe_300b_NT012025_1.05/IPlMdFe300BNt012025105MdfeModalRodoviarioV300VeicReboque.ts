import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop';

/**
 * Dados dos reboques
 */
export interface IPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Proprietários ou possuidor do Veículo. Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e
   */
  prop?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop;
  /**
   * UF em que veículo está licenciado Sigla da UF de licenciamento do veículo.
   */
  UF?: unknown;
}
