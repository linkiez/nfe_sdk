import { CPlNfAg100JNfagTiposBasicoV100GCons } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GCons';

/**
 * Histórico de Consumo
 */
export interface IPlNfAg100JNfagTiposBasicoV100GHistCons {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Consumo
   */
  gCons?: CPlNfAg100JNfagTiposBasicoV100GCons;
  /**
   * Média Mensal de consumo
   */
  medMensal?: unknown;
}
