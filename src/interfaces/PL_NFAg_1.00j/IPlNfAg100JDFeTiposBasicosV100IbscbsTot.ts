import { CPlNfAg100JDFeTiposBasicosV100Gcbs } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100Gcbs';

import { CPlNfAg100JDFeTiposBasicosV100GEstornoCred } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100GEstornoCred';

import { CPlNfAg100JDFeTiposBasicosV100Gibs } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100Gibs';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Grupo de informações de totais da CBS/IBS
 */
export interface IPlNfAg100JDFeTiposBasicosV100IbscbsTot {
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
   * Totalização do estorno de crédito
   */
  gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100GEstornoCred;
}
