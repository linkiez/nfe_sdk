/**
 * Totais referentes ao ICMS
 */
export interface IPlNfGas100ENfgasTiposBasicoV100IcmsTot {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * BC do ICMS
   */
  vBC?: unknown;
  /**
   * Valor Total do ICMS
   */
  vICMS?: unknown;
  /**
   * Valor Total do ICMS desonerado
   */
  vICMSDeson?: unknown;
  /**
   * Valor Total do FCP (Fundo de Combate à Pobreza).
   */
  vFCP?: unknown;
  /**
   * BC do ICMS ST
   */
  vBCST?: unknown;
  /**
   * Valor Total do ICMS ST
   */
  vST?: unknown;
  /**
   * Valor Total do FCP (Fundo de Combate à Pobreza) retido por substituição tributária.
   */
  vFCPST?: unknown;
}
