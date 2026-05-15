import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Transferência de Crédito
 */
export interface IPlNfAg100JDFeTiposBasicosV100TransfCred {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do IBS a ser transferido
   */
  vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS a ser transferida
   */
  vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
