import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Totais da Monofasia
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100GMono {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor total do IBS monofásico
   */
  vIBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total da CBS monofásica
   */
  vCBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total do IBS monofásico sujeito a retenção
   */
  vIBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total da CBS monofásica sujeita a retenção
   */
  vCBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor do IBS monofásico retido anteriormente
   */
  vIBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS monofásica retida anteriormente
   */
  vCBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
