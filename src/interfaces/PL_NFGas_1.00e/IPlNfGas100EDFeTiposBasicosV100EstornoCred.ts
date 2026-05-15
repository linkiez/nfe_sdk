import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Estorno de Crédito
 */
export interface IPlNfGas100EDFeTiposBasicosV100EstornoCred {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do IBS a ser estornado
   */
  vIBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS a ser estornada
   */
  vCBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
