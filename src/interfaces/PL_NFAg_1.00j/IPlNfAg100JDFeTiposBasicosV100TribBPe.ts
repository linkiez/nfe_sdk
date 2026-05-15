import { CPlNfAg100JDFeTiposBasicosV100Cibs } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100Cibs';

import { CPlNfAg100JDFeTiposBasicosV100EstornoCred } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100EstornoCred';

import { TPlNfAg100JDFeTiposBasicosV100Cst } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100IndDoacao } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100IndDoacao';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação do BPe
 */
export interface IPlNfAg100JDFeTiposBasicosV100TribBPe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código Situação Tributária do IBS/CBS
   */
  CST?: TPlNfAg100JDFeTiposBasicosV100Cst;
  /**
   * Código de Classificação Tributária do IBS e da CBS
   */
  cClassTrib?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
  /**
   * Tipo Indicador de Doação
   */
  indDoacao?: TPlNfAg100JDFeTiposBasicosV100IndDoacao;
  /**
   * Tipo CBS IBS Completo
   */
  gIBSCBS?: CPlNfAg100JDFeTiposBasicosV100Cibs;
  /**
   * Informado conforme indicador no cClassTrib
   */
  gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100EstornoCred;
}
