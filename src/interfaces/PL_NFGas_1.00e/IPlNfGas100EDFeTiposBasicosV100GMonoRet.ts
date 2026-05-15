import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica retida anteriormente
 */
export interface IPlNfGas100EDFeTiposBasicosV100GMonoRet {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Quantidade tributada retida anteriormente
   */
  qBCMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
  /**
   * Alíquota ad rem do IBS retido anteriormente
   */
  adRemIBSRet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS retido anteriormente
   */
  vIBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota ad rem da CBS retida anteriormente
   */
  adRemCBSRet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS retida anteriormente
   */
  vCBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
