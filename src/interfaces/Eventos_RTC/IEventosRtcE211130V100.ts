import { CEventosRtcE211130V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE211130V100DetEvento';

/**
 * Type contract for IEventosRtcE211130V100.
 */
export interface IEventosRtcE211130V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Imobilização de Item
   */
  detEvento?: CEventosRtcE211130V100DetEvento;
}
