import { TPlNfAg100JDFeTiposBasicosV100CompetApur } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100CompetApur';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Ajuste de Competência
 */
export interface IPlNfAg100JDFeTiposBasicosV100AjusteCompet {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Ano e mês referência do período de apuração (AAAA-MM)
   */
  competApur?: TPlNfAg100JDFeTiposBasicosV100CompetApur;
  /**
   * Valor do IBS
   */
  vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS
   */
  vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
