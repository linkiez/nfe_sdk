import { CPlNfAg100JNfagTiposBasicoV100GProcRef } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GProcRef';

import { CPlNfAg100JNfagTiposBasicoV100GTarif } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GTarif';

import { CPlNfAg100JNfagTiposBasicoV100Imposto } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Imposto';

import { CPlNfAg100JNfagTiposBasicoV100Prod } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Prod';

/**
 * Detalhamento de Produtos e Serviços
 */
export interface IPlNfAg100JNfagTiposBasicoV100Det {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Grupo de Tarifas por Período
   */
  gTarif?: CPlNfAg100JNfagTiposBasicoV100GTarif;
  /**
   * Dados do Produto ou Serviço
   */
  prod?: CPlNfAg100JNfagTiposBasicoV100Prod;
  /**
   * Tributos incidentes no Produto ou Serviço
   */
  imposto?: CPlNfAg100JNfagTiposBasicoV100Imposto;
  /**
   * Grupo Processo referenciado Este grupo somente deverá ser preenchido quando houver processo judicial ou administrativo que altere valores.
   */
  gProcRef?: CPlNfAg100JNfagTiposBasicoV100GProcRef;
}
