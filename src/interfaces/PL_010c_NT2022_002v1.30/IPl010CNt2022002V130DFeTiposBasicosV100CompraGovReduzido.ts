import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100EnteGov } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100EnteGov';

/**
 * Tipo Compras Governamentais
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100CompraGovReduzido {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Para administração pública direta e suas autarquias e fundações: 1=União 2=Estados 3=Distrito Federal 4=Municípios
   */
  tpEnteGov?: TPl010CNt2022002V130DFeTiposBasicosV100EnteGov;
  /**
   * Percentual de redução de aliquota em compra governamental
   */
  pRedutor?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
}
