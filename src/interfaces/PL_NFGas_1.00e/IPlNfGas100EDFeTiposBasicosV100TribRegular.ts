import { TPlNfGas100EDFeTiposBasicosV100Cst } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Cst';

import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfGas100EDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100TcClassTrib';

/**
 * Tipo Tributação Regular
 */
export interface IPlNfGas100EDFeTiposBasicosV100TribRegular {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código da Situação Tributária do IBS e CBS Informar qual seria o CST caso não cumprida a condição resolutória/suspensiva
   */
  CSTReg?: TPlNfGas100EDFeTiposBasicosV100Cst;
  /**
   * Informar qual seria o cClassTrib caso não cumprida a condição resolutória/suspensiva
   */
  cClassTribReg?: TPlNfGas100EDFeTiposBasicosV100TcClassTrib;
  /**
   * Alíquota do IBS da UF Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
   */
  pAliqEfetRegIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS da UF Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
   */
  vTribRegIBSUF?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota do IBS do Município Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
   */
  pAliqEfetRegIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS do Município Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
   */
  vTribRegIBSMun?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota da CBS Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
   */
  pAliqEfetRegCBS?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
   */
  vTribRegCBS?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
