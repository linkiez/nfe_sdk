import { TPlNfAg100JDFeTiposBasicosV100Cst } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Cst';

import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

import { TPlNfAg100JDFeTiposBasicosV100TcClassTrib } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100TcClassTrib';

/**
 * Tipo Tributação Regular
 */
export interface IPlNfAg100JDFeTiposBasicosV100TribRegular {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código da Situação Tributária do IBS e CBS Informar qual seria o CST caso não cumprida a condição resolutória/suspensiva
   */
  CSTReg?: TPlNfAg100JDFeTiposBasicosV100Cst;
  /**
   * Informar qual seria o cClassTrib caso não cumprida a condição resolutória/suspensiva
   */
  cClassTribReg?: TPlNfAg100JDFeTiposBasicosV100TcClassTrib;
  /**
   * Alíquota do IBS da UF Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
   */
  pAliqEfetRegIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS da UF Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
   */
  vTribRegIBSUF?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota do IBS do Município Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
   */
  pAliqEfetRegIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS do Município Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
   */
  vTribRegIBSMun?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota da CBS Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
   */
  pAliqEfetRegCBS?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
   */
  vTribRegCBS?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
