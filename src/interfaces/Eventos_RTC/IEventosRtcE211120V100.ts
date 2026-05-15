import { CEventosRtcE211120V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE211120V100DetEvento';

/**
 * Type contract for IEventosRtcE211120V100.
 */
export interface IEventosRtcE211120V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Destinação de item para consumo pessoal
   */
  detEvento?: CEventosRtcE211120V100DetEvento;
}
