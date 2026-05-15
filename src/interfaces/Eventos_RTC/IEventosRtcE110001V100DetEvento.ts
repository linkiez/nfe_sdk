/**
 * Informações do Cancelamento de evento
 */
export interface IEventosRtcE110001V100DetEvento {
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
   * Informar o número do Protocolo de Autorização do Evento a ser cancelado
   */
  nProtEvento?: unknown;
}
