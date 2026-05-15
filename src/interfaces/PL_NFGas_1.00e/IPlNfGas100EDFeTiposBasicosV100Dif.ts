import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Diferimento
 */
export interface IPlNfGas100EDFeTiposBasicosV100Dif {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Percentual do diferimento
   */
  pDif?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do diferimento
   */
  vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
