import { TPlNfAg100JDFeTiposBasicosV100Cst } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações do Imposto Seletivo
 */
export interface IPlNfAg100JDFeTiposBasicosV100Is {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código Situação Tributária do Imposto Seletivo
   */
  CSTIS?: TPlNfAg100JDFeTiposBasicosV100Cst;
  /**
   * Código de Classificação Tributária do IBS e da CBS
   */
  cClassTribIS?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
}
