import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300Disp } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300Disp';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfCiot } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfCiot';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContratante } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContratante';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfPag } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfPag';

import { TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc';

/**
 * Grupo de informações para Agência Reguladora
 */
export interface IPlMdFe300BNt012025105MdfeModalRodoviarioV300InfAntt {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Registro Nacional de Transportadores Rodoviários de Carga Registro obrigatório do emitente do MDF-e junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração.
   */
  RNTRC?: TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc;
  /**
   * Dados do CIOT
   */
  infCIOT?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfCiot;
  /**
   * Informações de Vale Pedágio Outras informações sobre Vale-Pedágio obrigatório que não tenham campos específicos devem ser informadas no campo de observações gerais de uso livre pelo contribuinte, visando atender as determinações legais vigentes.
   */
  valePed?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Disp;
  /**
   * Grupo de informações dos contratantes do serviço de transporte
   */
  infContratante?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContratante;
  /**
   * Informações do Pagamento do Contrato
   */
  infPag?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfPag;
}
