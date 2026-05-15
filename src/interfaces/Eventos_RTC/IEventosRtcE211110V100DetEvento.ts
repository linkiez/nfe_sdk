import { CEventosRtcE211110V100GCredPres } from '../../classes/Eventos_RTC/CEventosRtcE211110V100GCredPres';

/**
 * Informações do Evento de Solicitação de Apropriação de crédito presumido
 */
export interface IEventosRtcE211110V100DetEvento {
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
   * Informações de crédito presumido por item
   */
  gCredPres?: CEventosRtcE211110V100GCredPres;
}
