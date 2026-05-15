import { CEventosRtcE211110V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE211110V100DetEvento';

/**
 * Type contract for IEventosRtcE211110V100.
 */
export interface IEventosRtcE211110V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Solicitação de Apropriação de crédito presumido
   */
  detEvento?: CEventosRtcE211110V100DetEvento;
}
