import { CEventosRtcE211120V100GConsumo } from '../../classes/Eventos_RTC/CEventosRtcE211120V100GConsumo';

/**
 * Informações do Evento de Destinação de item para consumo pessoal
 */
export interface IEventosRtcE211120V100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do Órgão Autor do Evento. Informar o Código da UF para este Evento.
   */
  cOrgaoAutor?: unknown;
  /**
   * Versão do Aplicativo que recebeu o Evento
   */
  verAplic?: unknown;
  /**
   * Informações por item da NF-e de Aquisição
   */
  gConsumo?: CEventosRtcE211120V100GConsumo;
}
