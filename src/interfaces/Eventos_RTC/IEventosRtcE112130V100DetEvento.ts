import { CEventosRtcE112130V100GPerecimento } from '../../classes/Eventos_RTC/CEventosRtcE112130V100GPerecimento';

/**
 * Informações do Evento de Perecimento, perda, roubo ou furto durante o transporte contratado pelo fornecedor
 */
export interface IEventosRtcE112130V100DetEvento {
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
   * Informações por item da Nota de Fornecimento
   */
  gPerecimento?: CEventosRtcE112130V100GPerecimento;
}
