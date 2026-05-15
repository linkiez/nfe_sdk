import { CEventoProrrogIndust10SchemasE111501V100ItemPedido } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasE111501V100ItemPedido';

/**
 * Informações do Pedido de Prorrogação
 */
export interface IEventoProrrogIndust10SchemasE111501V100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informar o número do Protocolo de Autorização da NF-e a ser Prorrogada. (vide item 5.6).
   */
  nProt?: unknown;
  /**
   * Item do Pedido de Prorrogação. Recomenda-se agrupar a maior quantidade de itens em cada Pedido de Prorrogação
   */
  itemPedido?: CEventoProrrogIndust10SchemasE111501V100ItemPedido;
}
