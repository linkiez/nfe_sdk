import { CPl010CNt2022002V130DFeTiposBasicosV100Gcbs } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100Gcbs';

import { CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov';

import { CPl010CNt2022002V130DFeTiposBasicosV100TribRegular } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100TribRegular';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo CBS IBS Completo
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100Cibs {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do BC
   */
  vBC?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Grupo de Tributação da CBS
   */
  gCBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gcbs;
  /**
   * Grupo de informações da Tributação Regular. Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo.
   */
  gTribRegular?: CPl010CNt2022002V130DFeTiposBasicosV100TribRegular;
  /**
   * Grupo de informações da composição do valor do IBS e da CBS em compras governamental
   */
  gTribCompraGov?: CPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov;
}
