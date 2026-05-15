import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Transferência de Crédito
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100TransfCred {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do IBS a ser transferido
   */
  vIBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS a ser transferida
   */
  vCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
