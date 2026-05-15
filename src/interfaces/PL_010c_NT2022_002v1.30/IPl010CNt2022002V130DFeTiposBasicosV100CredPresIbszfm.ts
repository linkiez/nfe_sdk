import { TPl010CNt2022002V130DFeTiposBasicosV100CompetApur } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100CompetApur';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100TpCredPresIbszfm } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100TpCredPresIbszfm';

/**
 * Tipo Informações do crédito presumido de IBS para fornecimentos a partir da ZFM
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100CredPresIbszfm {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Ano e mês referência do período de apuração (AAAA-MM)
   */
  competApur?: TPl010CNt2022002V130DFeTiposBasicosV100CompetApur;
  /**
   * Classificação de acordo com o art. 450, § 1º, da LC 214/25 para o cálculo do crédito presumido na ZFM 0 - Sem crédito presumido; 1 - Bens de consumo final (55%); 2 - Bens de capital (75%); 3 - Bens intermediários (90,25%); 4 - Bens de informática e outros definidos em legislação (100%). OBS: Percentuais definidos no art. 450, § 1º, da LC 214/25 para o cálculo do crédito presumido
   */
  tpCredPresIBSZFM?: TPl010CNt2022002V130DFeTiposBasicosV100TpCredPresIbszfm;
  /**
   * Valor do crédito presumido calculado sobre o saldo devedor apurado
   */
  vCredPresIBSZFM?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
