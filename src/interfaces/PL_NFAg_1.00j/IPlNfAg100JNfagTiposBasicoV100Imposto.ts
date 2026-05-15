import { CPlNfAg100JNfagTiposBasicoV100Cofins } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Cofins';

import { CPlNfAg100JNfagTiposBasicoV100Fs } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Fs';

import { CPlNfAg100JNfagTiposBasicoV100Fu } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Fu';

import { CPlNfAg100JNfagTiposBasicoV100Pis } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Pis';

import { CPlNfAg100JNfagTiposBasicoV100RetTrib } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100RetTrib';

/**
 * Tributos incidentes no Produto ou Serviço
 */
export interface IPlNfAg100JNfagTiposBasicoV100Imposto {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Grupo de informações do IBS e CBS
   */
  IBSCBS?: unknown;
  /**
   * Dados do PIS
   */
  CPlNfAg100JNfagTiposBasicoV100Pis?: CPlNfAg100JNfagTiposBasicoV100Pis;
  /**
   * Dados do COFINS
   */
  CPlNfAg100JNfagTiposBasicoV100Cofins?: CPlNfAg100JNfagTiposBasicoV100Cofins;
  /**
   * Grupo de informações de retenção de tributos federais
   */
  retTrib?: CPlNfAg100JNfagTiposBasicoV100RetTrib;
  /**
   * Taxa de Fiscalização de Serviço
   */
  CPlNfAg100JNfagTiposBasicoV100Fs?: CPlNfAg100JNfagTiposBasicoV100Fs;
  /**
   * Taxa de Fiscalização de Uso
   */
  CPlNfAg100JNfagTiposBasicoV100Fu?: CPlNfAg100JNfagTiposBasicoV100Fu;
}
