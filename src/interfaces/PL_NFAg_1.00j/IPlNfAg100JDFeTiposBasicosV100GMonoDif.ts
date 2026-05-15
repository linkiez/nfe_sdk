import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações do diferimento da Tributação Monofásica
 */
export interface IPlNfAg100JDFeTiposBasicosV100GMonoDif {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Percentual do diferimento do imposto monofásico
   */
  pDifIBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS monofásico diferido
   */
  vIBSMonoDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Percentual do diferimento do imposto monofásico
   */
  pDifCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS monofásica diferida
   */
  vCBSMonoDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
