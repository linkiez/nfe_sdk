import { CPlNfGas100EDFeTiposBasicosV100Gcbs } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Gcbs';

import { CPlNfGas100EDFeTiposBasicosV100GEstornoCred } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100GEstornoCred';

import { CPlNfGas100EDFeTiposBasicosV100Gibs } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Gibs';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações de totais da CBS/IBS
 */
export interface IPlNfGas100EDFeTiposBasicosV100IbscbsTot {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Total Base de Calculo
   */
  vBCIBSCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Totalização do IBS
   */
  gIBS?: CPlNfGas100EDFeTiposBasicosV100Gibs;
  /**
   * Totalização da CBS
   */
  gCBS?: CPlNfGas100EDFeTiposBasicosV100Gcbs;
  /**
   * Totalização do estorno de crédito
   */
  gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100GEstornoCred;
}
