import { CPlNfAg100JNfagTiposBasicoV100GAnalise } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GAnalise';

import { TPlNfAg100JNfagTiposBasicoV100Compet } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Compet';

/**
 * Informações sobre a qualidade de água
 */
export interface IPlNfAg100JNfagTiposBasicoV100GQualiAgua {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Ano e mês referência da analise (AAAAMM)
   */
  CompetAnalise?: TPlNfAg100JNfagTiposBasicoV100Compet;
  /**
   * Grupo de informações da Análise
   */
  gAnalise?: CPlNfAg100JNfagTiposBasicoV100GAnalise;
}
