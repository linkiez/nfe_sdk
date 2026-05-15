import { CPlNfAg100JDFeTiposBasicosV100Gcbs } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100Gcbs';

import { CPlNfAg100JDFeTiposBasicosV100TribCompraGov } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100TribCompraGov';

import { CPlNfAg100JDFeTiposBasicosV100TribRegular } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100TribRegular';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo CBS IBS Completo
 */
export interface IPlNfAg100JDFeTiposBasicosV100Cibs {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do BC
   */
  vBC?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Grupo de Tributação da CBS
   */
  gCBS?: CPlNfAg100JDFeTiposBasicosV100Gcbs;
  /**
   * Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo.
   */
  gTribRegular?: CPlNfAg100JDFeTiposBasicosV100TribRegular;
  /**
   * Grupo de informações da composição do valor do IBS e da CBS em compras governamental
   */
  gTribCompraGov?: CPlNfAg100JDFeTiposBasicosV100TribCompraGov;
}
