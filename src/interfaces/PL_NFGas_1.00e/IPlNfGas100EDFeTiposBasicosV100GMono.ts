import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Totais da Monofasia
 */
export interface IPlNfGas100EDFeTiposBasicosV100GMono {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor total do IBS monofásico
   */
  vIBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total da CBS monofásica
   */
  vCBSMono?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total do IBS monofásico sujeito a retenção
   */
  vIBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total da CBS monofásica sujeita a retenção
   */
  vCBSMonoReten?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor do IBS monofásico retido anteriormente
   */
  vIBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS monofásica retida anteriormente
   */
  vCBSMonoRet?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
