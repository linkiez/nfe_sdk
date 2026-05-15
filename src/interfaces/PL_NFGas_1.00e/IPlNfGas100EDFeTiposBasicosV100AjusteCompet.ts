import { TPlNfGas100EDFeTiposBasicosV100CompetApur } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100CompetApur';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Ajuste de Competência
 */
export interface IPlNfGas100EDFeTiposBasicosV100AjusteCompet {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Ano e mês referência do período de apuração (AAAA-MM)
   */
  competApur?: TPlNfGas100EDFeTiposBasicosV100CompetApur;
  /**
   * Valor do IBS
   */
  vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS
   */
  vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
