import { CPl010CNt2022002V130DFeTiposBasicosV100CredPres } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130DFeTiposBasicosV100CredPres';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcCredPres } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100TcCredPres';

/**
 * Tipo Crédito Presumido da Operação
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100CredPresOper {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor da Base de Cálculo do Crédito Presumido da Operação
   */
  vBCCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Código de Classificação do Crédito Presumido do IBS e da CBS
   */
  cCredPres?: TPl010CNt2022002V130DFeTiposBasicosV100TcCredPres;
  /**
   * Grupo de Informações do Crédito Presumido referente ao IBS, quando aproveitado pelo emitente do documento.
   */
  gIBSCredPres?: CPl010CNt2022002V130DFeTiposBasicosV100CredPres;
  /**
   * Grupo de Informações do Crédito Presumido referente a CBS, quando aproveitado pelo emitente do documento.
   */
  gCBSCredPres?: CPl010CNt2022002V130DFeTiposBasicosV100CredPres;
}
