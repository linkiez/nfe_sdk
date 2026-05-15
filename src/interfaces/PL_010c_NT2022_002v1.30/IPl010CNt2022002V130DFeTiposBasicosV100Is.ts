import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações do Imposto Seletivo
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100Is {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código Situação Tributária do Imposto Seletivo
   */
  CSTIS?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
  /**
   * Código de Classificação Tributária do IBS e da CBS
   */
  cClassTribIS?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
}
