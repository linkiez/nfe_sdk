import { CEventosRtcE112130V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE112130V100DetEvento';

/**
 * Type contract for IEventosRtcE112130V100.
 */
export interface IEventosRtcE112130V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Perecimento, perda, roubo ou furto durante o transporte contratado pelo fornecedor
   */
  detEvento?: CEventosRtcE112130V100DetEvento;
}
