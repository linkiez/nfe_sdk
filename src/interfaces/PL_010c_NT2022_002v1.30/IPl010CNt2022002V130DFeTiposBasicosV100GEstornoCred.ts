import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Totalização do estorno de crédito
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100GEstornoCred {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor total do IBS estornado
   */
  vIBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Valor total da CBS estornada
   */
  vCBSEstCred?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
