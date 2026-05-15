import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica sujeita a retenção
 */
export interface IPlNfAg100JDFeTiposBasicosV100GMonoReten {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Quantidade tributada sujeita a retenção.
   */
  qBCMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
  /**
   * Alíquota ad rem do IBS sujeito a retenção
   */
  adRemIBSReten?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS monofásico sujeito a retenção
   */
  vIBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota ad rem da CBS sujeita a retenção
   */
  adRemCBSReten?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS monofásica sujeita a retenção
   */
  vCBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
