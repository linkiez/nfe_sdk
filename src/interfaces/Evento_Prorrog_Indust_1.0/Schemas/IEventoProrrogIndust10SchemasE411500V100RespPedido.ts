import { CEventoProrrogIndust10SchemasE411500V100ItemPedido } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasE411500V100ItemPedido';

/**
 * Versão do Fisco
 */
export interface IEventoProrrogIndust10SchemasE411500V100RespPedido {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Item do Pedido de Prorrogação
   */
  itemPedido?: CEventoProrrogIndust10SchemasE411500V100ItemPedido;
}
