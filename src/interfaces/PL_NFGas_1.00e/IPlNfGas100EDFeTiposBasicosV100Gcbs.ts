import { CPlNfGas100EDFeTiposBasicosV100DevTrib } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100DevTrib';

import { CPlNfGas100EDFeTiposBasicosV100Dif } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Dif';

import { CPlNfGas100EDFeTiposBasicosV100Red } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Red';

import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Type contract for IPlNfGas100EDFeTiposBasicosV100Gcbs.
 */
export interface IPlNfGas100EDFeTiposBasicosV100Gcbs {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vDif?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPresCondSus?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Tipo Diferimento
   */
  gDif?: CPlNfGas100EDFeTiposBasicosV100Dif;
  /**
   * Tipo Devolução Tributo
   */
  gDevTrib?: CPlNfGas100EDFeTiposBasicosV100DevTrib;
  /**
   * Tipo Redução Base de Cálculo
   */
  gRed?: CPlNfGas100EDFeTiposBasicosV100Red;
}
