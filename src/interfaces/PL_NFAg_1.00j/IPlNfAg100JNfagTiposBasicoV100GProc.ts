import { TPlNfAg100JNfagTiposBasicoV100ProcessoAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100ProcessoAg';

/**
 * Grupo identificador do Processo
 */
export interface IPlNfAg100JNfagTiposBasicoV100GProc {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo de Processo 0 - Processo Adm Estadual; 1 - Justiça Federal; 2 - Justiça Estadual; 3 - Processo Adm Municipal; 4 - Processo Adm Federal; 5 - Procon
   */
  tpProc?: TPlNfAg100JNfagTiposBasicoV100ProcessoAg;
}
