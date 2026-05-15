import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica padrão
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100GMonoPadrao {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Quantidade tributada na monofasia
   */
  qBCMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
  /**
   * Alíquota ad rem do IBS
   */
  adRemIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Alíquota ad rem da CBS
   */
  adRemCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS monofásico
   */
  vIBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS monofásica
   */
  vCBSMono?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
