import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica sujeita a retenção
 */
export interface IPlNfGas100EDFeTiposBasicosV100GMonoReten {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Quantidade tributada sujeita a retenção.
   */
  qBCMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1104Rtc;
  /**
   * Alíquota ad rem do IBS sujeito a retenção
   */
  adRemIBSReten?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS monofásico sujeito a retenção
   */
  vIBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota ad rem da CBS sujeita a retenção
   */
  adRemCBSReten?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS monofásica sujeita a retenção
   */
  vCBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
