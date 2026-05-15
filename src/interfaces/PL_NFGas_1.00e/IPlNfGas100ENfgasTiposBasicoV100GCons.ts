import { TPlNfGas100ENfgasTiposBasicoV100Compet } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Compet';

import { TPlNfGas100ENfgasTiposBasicoV100UMed } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100UMed';

/**
 * Consumo
 */
export interface IPlNfGas100ENfgasTiposBasicoV100GCons {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Ano e mês referência do faturamento (AAAAMM)
   */
  CompetFat?: TPlNfGas100ENfgasTiposBasicoV100Compet;
  /**
   * Unidade Básica de Medida 1 - m3
   */
  uMed?: TPlNfGas100ENfgasTiposBasicoV100UMed;
  /**
   * Média Diária de consumo
   */
  medDiaria?: unknown;
  /**
   * Consumo no mês
   */
  consumo?: unknown;
  /**
   * Valor Faturado
   */
  vFat?: unknown;
}
