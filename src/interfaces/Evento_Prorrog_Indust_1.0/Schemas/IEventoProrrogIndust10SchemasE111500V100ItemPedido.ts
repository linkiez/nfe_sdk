/**
 * Item do Pedido de Prorrogação. Recomenda-se agrupar a maior quantidade de itens em cada Pedido de Prorrogação
 */
export interface IEventoProrrogIndust10SchemasE111500V100ItemPedido {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Quantidade do item que será solicitado a prorrogação de prazo
   */
  qtdeItem?: unknown;
}
