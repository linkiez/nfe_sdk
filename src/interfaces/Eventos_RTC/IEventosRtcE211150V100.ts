import { CEventosRtcE211150V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE211150V100DetEvento';

/**
 * Type contract for IEventosRtcE211150V100.
 */
export interface IEventosRtcE211150V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Solicitação de Apropriação de Crédito para bens e serviços que dependem de atividade do adquirente
   */
  detEvento?: CEventosRtcE211150V100DetEvento;
}
