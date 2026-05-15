import { CEventosRtcE211130V100GImobilizacao } from '../../classes/Eventos_RTC/CEventosRtcE211130V100GImobilizacao';

/**
 * Informações do Evento de Imobilização de Item
 */
export interface IEventosRtcE211130V100DetEvento {
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
   * Informações de itens integrados ao ativo imobilizado
   */
  gImobilizacao?: CEventosRtcE211130V100GImobilizacao;
}
