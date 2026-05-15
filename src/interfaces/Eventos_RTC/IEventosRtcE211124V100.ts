import { CEventosRtcE211124V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE211124V100DetEvento';

/**
 * Type contract for IEventosRtcE211124V100.
 */
export interface IEventosRtcE211124V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Perecimento, perda, roubo ou furto durante o transporte contratado pelo adquirente
   */
  detEvento?: CEventosRtcE211124V100DetEvento;
}
