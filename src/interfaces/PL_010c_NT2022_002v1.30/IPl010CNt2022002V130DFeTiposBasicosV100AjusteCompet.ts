import { TPl010CNt2022002V130DFeTiposBasicosV100CompetApur } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100CompetApur';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Ajuste de Competência
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100AjusteCompet {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Ano e mês referência do período de apuração (AAAA-MM)
   */
  competApur?: TPl010CNt2022002V130DFeTiposBasicosV100CompetApur;
  /**
   * Valor do IBS
   */
  vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS
   */
  vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
