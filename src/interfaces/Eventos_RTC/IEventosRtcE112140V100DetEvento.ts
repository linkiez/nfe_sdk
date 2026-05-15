import { CEventosRtcE112140V100GItemNaoFornecido } from '../../classes/Eventos_RTC/CEventosRtcE112140V100GItemNaoFornecido';

/**
 * Informações do Evento de Fornecimento não realizado com pagamento antecipado
 */
export interface IEventosRtcE112140V100DetEvento {
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
  gItemNaoFornecido?: CEventosRtcE112140V100GItemNaoFornecido;
}
