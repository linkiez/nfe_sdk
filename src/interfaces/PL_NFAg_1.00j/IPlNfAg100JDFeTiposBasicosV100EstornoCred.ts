import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Estorno de Crédito
 */
export interface IPlNfAg100JDFeTiposBasicosV100EstornoCred {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do IBS a ser estornado
   */
  vIBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS a ser estornada
   */
  vCBSEstCred?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
