import { CPlNfAg100JDFeTiposBasicosV100GibsMun } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100GibsMun';

import { CPlNfAg100JDFeTiposBasicosV100Gibsuf } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100Gibsuf';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Type contract for IPlNfAg100JDFeTiposBasicosV100Gibs.
 */
export interface IPlNfAg100JDFeTiposBasicosV100Gibs {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property g IBSUF.
   */
  gIBSUF?: CPlNfAg100JDFeTiposBasicosV100Gibsuf;
  /**
   * Schema property g IBSMun.
   */
  gIBSMun?: CPlNfAg100JDFeTiposBasicosV100GibsMun;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vIBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPresCondSus?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
