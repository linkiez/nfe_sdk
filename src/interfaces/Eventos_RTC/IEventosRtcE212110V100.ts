import { CEventosRtcE212110V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE212110V100DetEvento';

/**
 * Type contract for IEventosRtcE212110V100.
 */
export interface IEventosRtcE212110V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Manifestação sobre Pedido de Transferência de Crédito de IBS em Operação de Sucessão
   */
  detEvento?: CEventosRtcE212110V100DetEvento;
}
