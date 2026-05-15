import { CEventosRtcE112150V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE112150V100DetEvento';

/**
 * Type contract for IEventosRtcE112150V100.
 */
export interface IEventosRtcE112150V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Atualização da Data de Previsão de Entrega
   */
  detEvento?: CEventosRtcE112150V100DetEvento;
}
