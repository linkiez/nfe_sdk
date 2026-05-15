import { CEventosRtcE412130V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE412130V100DetEvento';

/**
 * Type contract for IEventosRtcE412130V100.
 */
export interface IEventosRtcE412130V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Manifestação do Fisco sobre Pedido de Transferência de Crédito de CBS em Operação de Sucessão
   */
  detEvento?: CEventosRtcE412130V100DetEvento;
}
