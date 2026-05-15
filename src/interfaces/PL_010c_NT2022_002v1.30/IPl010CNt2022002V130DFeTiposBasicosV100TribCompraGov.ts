import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Tributação Compra Governamental
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100TribCompraGov {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pAliqIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025
   */
  vTribIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pAliqIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025
   */
  vTribIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pAliqCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025
   */
  vTribCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
