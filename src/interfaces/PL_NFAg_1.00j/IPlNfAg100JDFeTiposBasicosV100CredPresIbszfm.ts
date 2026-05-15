import { TPlNfAg100JDFeTiposBasicosV100CompetApur } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100CompetApur';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfAg100JDFeTiposBasicosV100TpCredPresIbszfm } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TpCredPresIbszfm';

/**
 * Tipo Informações do crédito presumido de IBS para fornecimentos a partir da ZFM
 */
export interface IPlNfAg100JDFeTiposBasicosV100CredPresIbszfm {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Ano e mês referência do período de apuração (AAAA-MM)
   */
  competApur?: TPlNfAg100JDFeTiposBasicosV100CompetApur;
  /**
   * Classificação de acordo com o art. 450, § 1º, da LC 214/25 para o cálculo do crédito presumido na ZFM 0 - Sem crédito presumido; 1 - Bens de consumo final (55%); 2 - Bens de capital (75%); 3 - Bens intermediários (90,25%); 4 - Bens de informática e outros definidos em legislação (100%). OBS: Percentuais definidos no art. 450, § 1º, da LC 214/25 para o cálculo do crédito presumido
   */
  tpCredPresIBSZFM?: TPlNfAg100JDFeTiposBasicosV100TpCredPresIbszfm;
  /**
   * Valor do crédito presumido calculado sobre o saldo devedor apurado
   */
  vCredPresIBSZFM?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
