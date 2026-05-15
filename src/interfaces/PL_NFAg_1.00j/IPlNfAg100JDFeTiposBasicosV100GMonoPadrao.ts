import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica padrão
 */
export interface IPlNfAg100JDFeTiposBasicosV100GMonoPadrao {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Quantidade tributada na monofasia
   */
  qBCMono?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
  /**
   * Alíquota ad rem do IBS
   */
  adRemIBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Alíquota ad rem da CBS
   */
  adRemCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS monofásico
   */
  vIBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS monofásica
   */
  vCBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
