import { CEventosRtcE110001V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE110001V100DetEvento';

/**
 * Type contract for IEventosRtcE110001V100.
 */
export interface IEventosRtcE110001V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Cancelamento de evento
   */
  detEvento?: CEventosRtcE110001V100DetEvento;
}
