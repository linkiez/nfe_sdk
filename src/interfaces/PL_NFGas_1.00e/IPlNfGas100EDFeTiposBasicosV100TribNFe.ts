import { CPlNfGas100EDFeTiposBasicosV100AjusteCompet } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100AjusteCompet';

import { CPlNfGas100EDFeTiposBasicosV100Cibs } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Cibs';

import { CPlNfGas100EDFeTiposBasicosV100CredPresIbszfm } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100CredPresIbszfm';

import { CPlNfGas100EDFeTiposBasicosV100CredPresOper } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100CredPresOper';

import { CPlNfGas100EDFeTiposBasicosV100EstornoCred } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100EstornoCred';

import { CPlNfGas100EDFeTiposBasicosV100Monofasia } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100Monofasia';

import { CPlNfGas100EDFeTiposBasicosV100TransfCred } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100TransfCred';

import { TPlNfGas100EDFeTiposBasicosV100Cst } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100IndDoacao } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100IndDoacao';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

/**
 * Grupo de informações da Tributação da NFe
 */
export interface IPlNfGas100EDFeTiposBasicosV100TribNFe {
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
   * Informado conforme indicador no cClassTrib
   */
  gEstornoCred?: CPlNfGas100EDFeTiposBasicosV100EstornoCred;
}
