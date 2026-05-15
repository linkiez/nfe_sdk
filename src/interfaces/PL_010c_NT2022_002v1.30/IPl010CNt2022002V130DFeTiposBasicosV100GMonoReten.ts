import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações da Tributação Monofásica sujeita a retenção
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100GMonoReten {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Quantidade tributada sujeita a retenção.
   */
  qBCMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1104Rtc;
  /**
   * Alíquota ad rem do IBS sujeito a retenção
   */
  adRemIBSReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS monofásico sujeito a retenção
   */
  vIBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota ad rem da CBS sujeita a retenção
   */
  adRemCBSReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS monofásica sujeita a retenção
   */
  vCBSMonoReten?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
