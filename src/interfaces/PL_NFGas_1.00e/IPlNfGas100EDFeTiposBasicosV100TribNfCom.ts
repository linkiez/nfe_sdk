import { CPlNfGas100EDFeTiposBasicosV100Cibs } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Cibs';

import { CPlNfGas100EDFeTiposBasicosV100EstornoCred } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100EstornoCred';

import { TPlNfGas100EDFeTiposBasicosV100Cst } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100IndDoacao } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100IndDoacao';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFCom
 */
export interface IPlNfGas100EDFeTiposBasicosV100TribNfCom {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código Situação Tributária do IBS/CBS
   */
  CST?: TPlNfGas100EDFeTiposBasicosV100Cst;
  /**
   * Código de Classificação Tributária do IBS e da CBS
   */
  cClassTrib?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
  /**
   * Indica se a operação é de doação
   */
  indDoacao?: TPlNfGas100EDFeTiposBasicosV100IndDoacao;
  /**
   * Tipo CBS IBS Completo
   */
  gIBSCBS?: CPlNfGas100EDFeTiposBasicosV100Cibs;
  /**
   * Informado conforme indicador no cClassTrib
   */
  gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100EstornoCred;
}
