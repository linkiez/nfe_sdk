import { CEventosRtcE211124V100GPerecimento } from '../../classes/Eventos_RTC/CEventosRtcE211124V100GPerecimento';

/**
 * Informações do Evento de Perecimento, perda, roubo ou furto durante o transporte contratado pelo adquirente
 */
export interface IEventosRtcE211124V100DetEvento {
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
   * Informações por item da Nota de Aquisição
   */
  gPerecimento?: CEventosRtcE211124V100GPerecimento;
}
