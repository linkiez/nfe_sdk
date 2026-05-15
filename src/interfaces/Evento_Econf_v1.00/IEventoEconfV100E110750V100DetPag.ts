/**
 * Grupo de detalhamento da forma de pagamento.
 */
export interface IEventoEconfV100E110750V100DetPag {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do Pagamento. Esta tag poderá ser omitida quando a tag tPag=90 (Sem Pagamento), caso contrário deverá ser preenchida.
   */
  vPag?: unknown;
  /**
   * Data do Pagamento
   */
  dPag?: unknown;
}
