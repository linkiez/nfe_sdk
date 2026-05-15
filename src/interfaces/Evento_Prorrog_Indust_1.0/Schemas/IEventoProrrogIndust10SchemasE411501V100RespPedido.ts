import { CEventoProrrogIndust10SchemasE411501V100ItemPedido } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasE411501V100ItemPedido';

/**
 * Versão do Fisco
 */
export interface IEventoProrrogIndust10SchemasE411501V100RespPedido {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Item do Pedido de Prorrogação
   */
  itemPedido?: CEventoProrrogIndust10SchemasE411501V100ItemPedido;
}
