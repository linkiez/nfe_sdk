import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Transferência de Crédito
 */
export interface IPlNfGas100EDFeTiposBasicosV100TransfCred {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do IBS a ser transferido
   */
  vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS a ser transferida
   */
  vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
