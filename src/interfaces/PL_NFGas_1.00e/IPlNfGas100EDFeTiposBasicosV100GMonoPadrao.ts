import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica padrão
 */
export interface IPlNfGas100EDFeTiposBasicosV100GMonoPadrao {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Quantidade tributada na monofasia
   */
  qBCMono?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
  /**
   * Alíquota ad rem do IBS
   */
  adRemIBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Alíquota ad rem da CBS
   */
  adRemCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS monofásico
   */
  vIBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS monofásica
   */
  vCBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
