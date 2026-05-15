import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Totais da Monofasia
 */
export interface IPlNfAg100JDFeTiposBasicosV100GMono {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor total do IBS monofásico
   */
  vIBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total da CBS monofásica
   */
  vCBSMono?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total do IBS monofásico sujeito a retenção
   */
  vIBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total da CBS monofásica sujeita a retenção
   */
  vCBSMonoReten?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor do IBS monofásico retido anteriormente
   */
  vIBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS monofásica retida anteriormente
   */
  vCBSMonoRet?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
