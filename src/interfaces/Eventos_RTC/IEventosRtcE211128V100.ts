import { CEventosRtcE211128V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE211128V100DetEvento';

/**
 * Type contract for IEventosRtcE211128V100.
 */
export interface IEventosRtcE211128V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Aceite de débito na apuração por emissão de nota de crédito
   */
  detEvento?: CEventosRtcE211128V100DetEvento;
}
