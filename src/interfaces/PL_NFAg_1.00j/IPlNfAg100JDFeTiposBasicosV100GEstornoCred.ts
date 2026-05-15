import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Totalização do estorno de crédito
 */
export interface IPlNfAg100JDFeTiposBasicosV100GEstornoCred {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor total do IBS estornado
   */
  vIBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total da CBS estornada
   */
  vCBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
