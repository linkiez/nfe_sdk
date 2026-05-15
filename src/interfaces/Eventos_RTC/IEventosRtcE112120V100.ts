import { CEventosRtcE112120V100DetEvento } from '../../classes/Eventos_RTC/CEventosRtcE112120V100DetEvento';

/**
 * Type contract for IEventosRtcE112120V100.
 */
export interface IEventosRtcE112120V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informações do Evento de Importação em ALC/ZFM não convertida em isenção
   */
  detEvento?: CEventosRtcE112120V100DetEvento;
}
