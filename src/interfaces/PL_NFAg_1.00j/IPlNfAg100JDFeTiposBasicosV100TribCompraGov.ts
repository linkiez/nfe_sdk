import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Tributação Compra Governamental
 */
export interface IPlNfAg100JDFeTiposBasicosV100TribCompraGov {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pAliqIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025
   */
  vTribIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pAliqIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025
   */
  vTribIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pAliqCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025
   */
  vTribCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
