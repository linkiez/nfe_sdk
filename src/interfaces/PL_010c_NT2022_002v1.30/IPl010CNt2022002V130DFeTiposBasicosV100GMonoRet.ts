import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica retida anteriormente
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100GMonoRet {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Quantidade tributada retida anteriormente
   */
  qBCMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
  /**
   * Alíquota ad rem do IBS retido anteriormente
   */
  adRemIBSRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS retido anteriormente
   */
  vIBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota ad rem da CBS retida anteriormente
   */
  adRemCBSRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS retida anteriormente
   */
  vCBSMonoRet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
