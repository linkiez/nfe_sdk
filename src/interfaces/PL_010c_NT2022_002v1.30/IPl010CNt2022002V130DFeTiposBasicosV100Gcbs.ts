import { CPl010CNt2022002V130DFeTiposBasicosV100DevTrib } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100DevTrib';

import { CPl010CNt2022002V130DFeTiposBasicosV100Dif } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100Dif';

import { CPl010CNt2022002V130DFeTiposBasicosV100Red } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100Red';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Type contract for IPl010CNt2022002V130DFeTiposBasicosV100Gcbs.
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100Gcbs {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vDevTrib?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPresCondSus?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Tipo Diferimento
   */
  gDif?: CPl010CNt2022002V130DFeTiposBasicosV100Dif;
  /**
   * Tipo Devolução Tributo
   */
  gDevTrib?: CPl010CNt2022002V130DFeTiposBasicosV100DevTrib;
  /**
   * Tipo Redução Base de Cálculo
   */
  gRed?: CPl010CNt2022002V130DFeTiposBasicosV100Red;
}
