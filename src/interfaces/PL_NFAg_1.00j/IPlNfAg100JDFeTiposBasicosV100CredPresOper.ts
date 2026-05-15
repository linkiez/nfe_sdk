import { CPlNfAg100JDFeTiposBasicosV100CredPres } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JDFeTiposBasicosV100CredPres';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfAg100JDFeTiposBasicosV100TcCredPres } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TcCredPres';

/**
 * Tipo Crédito Presumido da Operação
 */
export interface IPlNfAg100JDFeTiposBasicosV100CredPresOper {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor da Base de Cálculo do Crédito Presumido da Operação
   */
  vBCCredPres?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Código de Classificação do Crédito Presumido do IBS e da CBS
   */
  cCredPres?: TPlNfAg100JDFeTiposBasicosV100TcCredPres;
  /**
   * Grupo de Informações do Crédito Presumido referente ao IBS, quando aproveitado pelo emitente do documento.
   */
  gIBSCredPres?: CPlNfAg100JDFeTiposBasicosV100CredPres;
  /**
   * Grupo de Informações do Crédito Presumido referente a CBS, quando aproveitado pelo emitente do documento.
   */
  gCBSCredPres?: CPlNfAg100JDFeTiposBasicosV100CredPres;
}
