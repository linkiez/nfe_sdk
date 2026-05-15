import { CPlNfAg100JNfagTiposBasicoV100GProc } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GProc';

/**
 * Grupo Processo referenciado
 */
export interface IPlNfAg100JNfagTiposBasicoV100GProcRef {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor unitário do item Informar o valor sem a influência da decisão judicial/administrativa.
   */
  vItem?: unknown;
  /**
   * Quantidade Faturada Informar a quantidade de comercialização do produto .
   */
  qFaturada?: unknown;
  /**
   * Valor total do item
   */
  vProd?: unknown;
  /**
   * Grupo identificador do Processo
   */
  gProc?: CPlNfAg100JNfagTiposBasicoV100GProc;
}
