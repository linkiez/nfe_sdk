import { CPlNfAg100JDFeTiposBasicosV100DevTrib } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100DevTrib';

import { CPlNfAg100JDFeTiposBasicosV100Dif } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100Dif';

import { CPlNfAg100JDFeTiposBasicosV100Red } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100Red';

import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Type contract for IPlNfAg100JDFeTiposBasicosV100Gcbs.
 */
export interface IPlNfAg100JDFeTiposBasicosV100Gcbs {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vDevTrib?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPresCondSus?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Tipo Diferimento
   */
  gDif?: CPlNfAg100JDFeTiposBasicosV100Dif;
  /**
   * Tipo Devolução Tributo
   */
  gDevTrib?: CPlNfAg100JDFeTiposBasicosV100DevTrib;
  /**
   * Tipo Redução Base de Cálculo
   */
  gRed?: CPlNfAg100JDFeTiposBasicosV100Red;
}
