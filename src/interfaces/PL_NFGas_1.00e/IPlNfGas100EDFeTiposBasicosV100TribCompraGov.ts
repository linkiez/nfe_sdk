import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Tributação Compra Governamental
 */
export interface IPlNfGas100EDFeTiposBasicosV100TribCompraGov {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pAliqIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/2025
   */
  vTribIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pAliqIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor que seria devido ao município, sem aplicação do Art. 473. da LC 214/2025
   */
  vTribIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Tipo Decimal com até 3 dígitos inteiros, podendo ter de 2 até 4 decimais
   */
  pAliqCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/2025
   */
  vTribCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
