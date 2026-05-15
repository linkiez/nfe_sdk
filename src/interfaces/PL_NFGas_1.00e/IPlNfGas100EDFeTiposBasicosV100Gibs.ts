import { CPlNfGas100EDFeTiposBasicosV100GibsMun } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100GibsMun';

import { CPlNfGas100EDFeTiposBasicosV100Gibsuf } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Gibsuf';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Type contract for IPlNfGas100EDFeTiposBasicosV100Gibs.
 */
export interface IPlNfGas100EDFeTiposBasicosV100Gibs {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property g IBSUF.
   */
  gIBSUF?: CPlNfGas100EDFeTiposBasicosV100Gibsuf;
  /**
   * Schema property g IBSMun.
   */
  gIBSMun?: CPlNfGas100EDFeTiposBasicosV100GibsMun;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vIBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPresCondSus?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
