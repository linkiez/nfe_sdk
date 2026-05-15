import { TPl010CNt2022002V130DFeTiposBasicosV100Cst } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Cst';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc';

import { TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib';

/**
 * Tipo Tributação Regular
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100TribRegular {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código da Situação Tributária do IBS e CBS Informar qual seria o CST caso não cumprida a condição resolutória/suspensiva
   */
  CSTReg?: TPl010CNt2022002V130DFeTiposBasicosV100Cst;
  /**
   * Informar qual seria o cClassTrib caso não cumprida a condição resolutória/suspensiva
   */
  cClassTribReg?: TPl010CNt2022002V130DFeTiposBasicosV100TcClassTrib;
  /**
   * Alíquota do IBS da UF Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
   */
  pAliqEfetRegIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS da UF Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
   */
  vTribRegIBSUF?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota do IBS do Município Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
   */
  pAliqEfetRegIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do IBS do Município Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
   */
  vTribRegIBSMun?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
  /**
   * Alíquota da CBS Informar como seria a Alíquota caso não cumprida a condição resolutória/suspensiva
   */
  pAliqEfetRegCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor da CBS Informar como seria o valor do Tributo caso não cumprida a condição resolutória/suspensiva
   */
  vTribRegCBS?: TPl010CNt2022002V130DFeTiposBasicosV100Dec1302Rtc;
}
