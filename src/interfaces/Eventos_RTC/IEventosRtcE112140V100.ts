import { CEventosRtcE112140V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE112140V100DetEvento';

/**
 * Type contract for IEventosRtcE112140V100.
 */
export interface IEventosRtcE112140V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Fornecimento não realizado com pagamento antecipado
   */
  detEvento?: CEventosRtcE112140V100DetEvento;
}
