import { CPl010CNt2022002V130DFeTiposBasicosV100Gcbs } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100Gcbs';

import { CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred';

import { CPl010CNt2022002V130DFeTiposBasicosV100Gibs } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100Gibs';

import { CPl010CNt2022002V130DFeTiposBasicosV100GMono } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100GMono';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações de totais da CBS/IBS com monofasia
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100IbscbsMonoTot {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Total Base de Calculo
   */
  vBCIBSCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Totalização do IBS
   */
  gIBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gibs;
  /**
   * Totalização da CBS
   */
  gCBS?: CPl010CNt2022002V130DFeTiposBasicosV100Gcbs;
  /**
   * Totais da Monofasia Só deverá ser utilizado para DFe modelos 55 e 65
   */
  gMono?: CPl010CNt2022002V130DFeTiposBasicosV100GMono;
  /**
   * Totalização do estorno de crédito
   */
  gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred;
}
