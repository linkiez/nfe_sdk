import { CPl010CNt2022002V130DFeTiposBasicosV100Cibs } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100Cibs';

import { CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred';

import { CPl010CNt2022002V130DFeTiposBasicosV100Monofasia } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100Monofasia';

import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFGas
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100TribNfGas {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código Situação Tributária do IBS/CBS
   */
  CST?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
  /**
   * Código de Classificação Tributária do IBS e da CBS
   */
  cClassTrib?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
  /**
   * Tipo Indicador de Doação
   */
  indDoacao?: TPl010CNt2022002V130DFeTiposBasicosV100IndDoacao;
  /**
   * Informado conforme indicador no cClassTrib
   */
  gEstornoCred?: CPl010CNt2022002V130DFeTiposBasicosV100EstornoCred;
}
