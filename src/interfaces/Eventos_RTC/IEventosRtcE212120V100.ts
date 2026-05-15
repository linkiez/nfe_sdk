import { CEventosRtcE212120V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE212120V100DetEvento';

/**
 * Type contract for IEventosRtcE212120V100.
 */
export interface IEventosRtcE212120V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Manifestação sobre Pedido de Transferência de Créditode CBS em Operação de Sucessão
   */
  detEvento?: CEventosRtcE212120V100DetEvento;
}
