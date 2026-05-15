import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações do diferimento da Tributação Monofásica
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100GMonoDif {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Percentual do diferimento do imposto monofásico
   */
  pDifIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS monofásico diferido
   */
  vIBSMonoDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Percentual do diferimento do imposto monofásico
   */
  pDifCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS monofásica diferida
   */
  vCBSMonoDif?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
