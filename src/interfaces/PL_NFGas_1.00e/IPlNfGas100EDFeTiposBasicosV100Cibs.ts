import { CPlNfGas100EDFeTiposBasicosV100Gcbs } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Gcbs';

import { CPlNfGas100EDFeTiposBasicosV100TribCompraGov } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100TribCompraGov';

import { CPlNfGas100EDFeTiposBasicosV100TribRegular } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100TribRegular';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo CBS IBS Completo
 */
export interface IPlNfGas100EDFeTiposBasicosV100Cibs {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do BC
   */
  vBC?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Grupo de Tributação da CBS
   */
  gCBS?: CPlNfGas100EDFeTiposBasicosV100Gcbs;
  /**
   * Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo.
   */
  gTribRegular?: CPlNfGas100EDFeTiposBasicosV100TribRegular;
  /**
   * Grupo de informações da composição do valor do IBS e da CBS em compras governamental
   */
  gTribCompraGov?: CPlNfGas100EDFeTiposBasicosV100TribCompraGov;
}
