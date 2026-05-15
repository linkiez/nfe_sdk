import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Totalização do estorno de crédito
 */
export interface IPlNfGas100EDFeTiposBasicosV100GEstornoCred {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor total do IBS estornado
   */
  vIBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total da CBS estornada
   */
  vCBSEstCred?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
