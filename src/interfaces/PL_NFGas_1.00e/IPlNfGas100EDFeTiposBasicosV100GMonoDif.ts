import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações do diferimento da Tributação Monofásica
 */
export interface IPlNfGas100EDFeTiposBasicosV100GMonoDif {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Percentual do diferimento do imposto monofásico
   */
  pDifIBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS monofásico diferido
   */
  vIBSMonoDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Percentual do diferimento do imposto monofásico
   */
  pDifCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS monofásica diferida
   */
  vCBSMonoDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
