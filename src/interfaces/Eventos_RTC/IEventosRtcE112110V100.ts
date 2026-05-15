import { CEventosRtcE112110V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE112110V100DetEvento';

/**
 * Type contract for IEventosRtcE112110V100.
 */
export interface IEventosRtcE112110V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Informação de efetivo pagamento integral para liberar crédito presumido do adquirente
   */
  detEvento?: CEventosRtcE112110V100DetEvento;
}
