import { TPlNfGas100ENfgasTiposBasicoV100UMed } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100UMed';

/**
 * Tipo de dados de medida
 */
export interface IPlNfGas100ENfgasTiposBasicoV100Medida {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Unidade Básica de Medida 1 –m3
   */
  uMed?: TPlNfGas100ENfgasTiposBasicoV100UMed;
  /**
   * Valor da medição (vMedAtu – vMedAnt)
   */
  vMed?: unknown;
}
