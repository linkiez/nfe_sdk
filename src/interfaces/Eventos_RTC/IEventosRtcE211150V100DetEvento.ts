import { CEventosRtcE211150V100GCredito } from '../../classes/Eventos_RTC/CEventosRtcE211150V100GCredito';

/**
 * Informações do Evento de Solicitação de Apropriação de Crédito para bens e serviços que dependem de atividade do adquirente
 */
export interface IEventosRtcE211150V100DetEvento {
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
   * Informações de crédito
   */
  gCredito?: CEventosRtcE211150V100GCredito;
}
