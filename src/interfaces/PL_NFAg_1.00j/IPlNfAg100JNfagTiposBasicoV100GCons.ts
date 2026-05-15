import { TPlNfAg100JNfagTiposBasicoV100Compet } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Compet';

import { TPlNfAg100JNfagTiposBasicoV100UMedAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100UMedAg';

/**
 * Consumo
 */
export interface IPlNfAg100JNfagTiposBasicoV100GCons {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Ano e mês referência do faturamento (AAAAMM)
   */
  CompetFat?: TPlNfAg100JNfagTiposBasicoV100Compet;
  /**
   * Unidade Básica de Medida 1 - m3 e 2 - litro
   */
  uMed?: TPlNfAg100JNfagTiposBasicoV100UMedAg;
  /**
   * Média Diária de consumo
   */
  medDiaria?: unknown;
  /**
   * Consumo no mês
   */
  consumo?: unknown;
  /**
   * Volume Faturado
   */
  volFat?: unknown;
}
