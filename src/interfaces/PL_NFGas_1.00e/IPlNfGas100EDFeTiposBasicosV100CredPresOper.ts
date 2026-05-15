import { CPlNfGas100EDFeTiposBasicosV100CredPres } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EDFeTiposBasicosV100CredPres';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfGas100EDFeTiposBasicosV100TcCredPres } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100TcCredPres';

/**
 * Tipo Crédito Presumido da Operação
 */
export interface IPlNfGas100EDFeTiposBasicosV100CredPresOper {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor da Base de Cálculo do Crédito Presumido da Operação
   */
  vBCCredPres?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Código de Classificação do Crédito Presumido do IBS e da CBS
   */
  cCredPres?: TPlNfGas100EDFeTiposBasicosV100TcCredPres;
  /**
   * Grupo de Informações do Crédito Presumido referente ao IBS, quando aproveitado pelo emitente do documento.
   */
  gIBSCredPres?: CPlNfGas100EDFeTiposBasicosV100CredPres;
  /**
   * Grupo de Informações do Crédito Presumido referente a CBS, quando aproveitado pelo emitente do documento.
   */
  gCBSCredPres?: CPlNfGas100EDFeTiposBasicosV100CredPres;
}
