import { CPlNfGas100EDFeTiposBasicosV100Cibs } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Cibs';

import { CPlNfGas100EDFeTiposBasicosV100EstornoCred } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100EstornoCred';

import { CPlNfGas100EDFeTiposBasicosV100Monofasia } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Monofasia';

import { TPlNfGas100EDFeTiposBasicosV100Cst } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100IndDoacao } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100IndDoacao';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFGas
 */
export interface IPlNfGas100EDFeTiposBasicosV100TribNfGas {
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
   * Tipo Indicador de Doação
   */
  indDoacao?: TPlNfGas100EDFeTiposBasicosV100IndDoacao;
  /**
   * Informado conforme indicador no cClassTrib
   */
  gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100EstornoCred;
}
