import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Estorno de Crédito
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100EstornoCred {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do IBS a ser estornado
   */
  vIBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor da CBS a ser estornada
   */
  vCBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
