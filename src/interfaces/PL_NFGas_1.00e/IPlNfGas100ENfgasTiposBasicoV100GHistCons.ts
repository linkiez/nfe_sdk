import { CPlNfGas100ENfgasTiposBasicoV100GCons } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100GCons';

/**
 * Histórico de Consumo
 */
export interface IPlNfGas100ENfgasTiposBasicoV100GHistCons {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Consumo
   */
  gCons?: CPlNfGas100ENfgasTiposBasicoV100GCons;
  /**
   * Média Mensal de consumo
   */
  medMensal?: unknown;
}
