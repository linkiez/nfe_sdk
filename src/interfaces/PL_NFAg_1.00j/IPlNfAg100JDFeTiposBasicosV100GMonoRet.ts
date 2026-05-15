import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica retida anteriormente
 */
export interface IPlNfAg100JDFeTiposBasicosV100GMonoRet {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Quantidade tributada retida anteriormente
   */
  qBCMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1104Rtc;
  /**
   * Alíquota ad rem do IBS retido anteriormente
   */
  adRemIBSRet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS retido anteriormente
   */
  vIBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota ad rem da CBS retida anteriormente
   */
  adRemCBSRet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS retida anteriormente
   */
  vCBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
