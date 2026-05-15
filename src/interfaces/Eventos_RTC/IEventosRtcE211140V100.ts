import { CEventosRtcE211140V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE211140V100DetEvento';

/**
 * Type contract for IEventosRtcE211140V100.
 */
export interface IEventosRtcE211140V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Solicitação de Apropriação de Crédito de Combustível
   */
  detEvento?: CEventosRtcE211140V100DetEvento;
}
