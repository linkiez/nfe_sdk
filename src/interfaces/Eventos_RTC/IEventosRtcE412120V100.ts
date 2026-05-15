import { CEventosRtcE412120V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE412120V100DetEvento';

/**
 * Type contract for IEventosRtcE412120V100.
 */
export interface IEventosRtcE412120V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Manifestação do Fisco sobre Pedido de Transferência de Crédito de IBS em Operações de Sucessão
   */
  detEvento?: CEventosRtcE412120V100DetEvento;
}
