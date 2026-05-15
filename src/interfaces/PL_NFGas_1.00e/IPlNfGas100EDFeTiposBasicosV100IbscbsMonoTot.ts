import { CPlNfGas100EDFeTiposBasicosV100Gcbs } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Gcbs';

import { CPlNfGas100EDFeTiposBasicosV100GEstornoCred } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100GEstornoCred';

import { CPlNfGas100EDFeTiposBasicosV100Gibs } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Gibs';

import { CPlNfGas100EDFeTiposBasicosV100GMono } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100GMono';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações de totais da CBS/IBS com monofasia
 */
export interface IPlNfGas100EDFeTiposBasicosV100IbscbsMonoTot {
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
   * Totais da Monofasia Só deverá ser utilizado para DFe modelos 55 e 65
   */
  gMono?: CPlNfGas100EDFeTiposBasicosV100GMono;
  /**
   * Totalização do estorno de crédito
   */
  gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100GEstornoCred;
}
