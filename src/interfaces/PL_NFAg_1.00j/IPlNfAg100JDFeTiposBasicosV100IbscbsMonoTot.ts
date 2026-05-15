import { CPlNfAg100JDFeTiposBasicosV100Gcbs } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100Gcbs';

import { CPlNfAg100JDFeTiposBasicosV100GEstornoCred } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100GEstornoCred';

import { CPlNfAg100JDFeTiposBasicosV100Gibs } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100Gibs';

import { CPlNfAg100JDFeTiposBasicosV100GMono } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100GMono';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações de totais da CBS/IBS com monofasia
 */
export interface IPlNfAg100JDFeTiposBasicosV100IbscbsMonoTot {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Total Base de Calculo
   */
  vBCIBSCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Totalização do IBS
   */
  gIBS?: CPlNfAg100JDFeTiposBasicosV100Gibs;
  /**
   * Totalização da CBS
   */
  gCBS?: CPlNfAg100JDFeTiposBasicosV100Gcbs;
  /**
   * Totais da Monofasia Só deverá ser utilizado para DFe modelos 55 e 65
   */
  gMono?: CPlNfAg100JDFeTiposBasicosV100GMono;
  /**
   * Totalização do estorno de crédito
   */
  gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100GEstornoCred;
}
