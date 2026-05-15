import { CPlNfAg100JDFeTiposBasicosV100AjusteCompet } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100AjusteCompet';

import { CPlNfAg100JDFeTiposBasicosV100Cibs } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100Cibs';

import { CPlNfAg100JDFeTiposBasicosV100CredPresIbszfm } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100CredPresIbszfm';

import { CPlNfAg100JDFeTiposBasicosV100CredPresOper } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100CredPresOper';

import { CPlNfAg100JDFeTiposBasicosV100EstornoCred } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100EstornoCred';

import { CPlNfAg100JDFeTiposBasicosV100Monofasia } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100Monofasia';

import { CPlNfAg100JDFeTiposBasicosV100TransfCred } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100TransfCred';

import { TPlNfAg100JDFeTiposBasicosV100Cst } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100IndDoacao } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100IndDoacao';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFe
 */
export interface IPlNfAg100JDFeTiposBasicosV100TribNFe {
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
   * Indica se a operação é de doação
   */
  indDoacao?: TPlNfAg100JDFeTiposBasicosV100IndDoacao;
  /**
   * Informado conforme indicador no cClassTrib
   */
  gEstornoCred?: CPlNfAg100JDFeTiposBasicosV100EstornoCred;
}
