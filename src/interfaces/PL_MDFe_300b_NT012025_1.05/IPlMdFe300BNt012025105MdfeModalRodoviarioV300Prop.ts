import { TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc';

/**
 * Proprietários ou possuidor do Veículo. Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e
 */
export interface IPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Registro Nacional dos Transportadores Rodoviários de Carga Registro obrigatório do proprietário, co-proprietário ou arrendatário do veículo junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração.
   */
  RNTRC?: TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc;
}
