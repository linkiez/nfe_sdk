/**
 * Grupo de Informação do Provedor de Assinatura e Autorização
 */
export interface IPlNfAg100JEventoNfAgTiposBasicoV100InfPaa {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * CNPJ da empresa que emitirá evento em nome de outra no caso do faturamento conjunto
   */
  CNPJPAA?: unknown;
}
