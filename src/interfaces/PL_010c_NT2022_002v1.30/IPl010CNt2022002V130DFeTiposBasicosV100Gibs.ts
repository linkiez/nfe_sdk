import { CPl010CNt2022002V130DFeTiposBasicosV100GibsMun } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100GibsMun';

import { CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Type contract for IPl010CNt2022002V130DFeTiposBasicosV100Gibs.
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100Gibs {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property g IBSUF.
   */
  gIBSUF?: CPl010CNt2022002V130DFeTiposBasicosV100Gibsuf;
  /**
   * Schema property g IBSMun.
   */
  gIBSMun?: CPl010CNt2022002V130DFeTiposBasicosV100GibsMun;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com 15 dígitos, sendo 13 de corpo e 2 decimais
   */
  vCredPresCondSus?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
