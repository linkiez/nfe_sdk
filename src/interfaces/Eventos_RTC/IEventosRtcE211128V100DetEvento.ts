/**
 * Informações do Evento de Aceite de débito na apuração por emissão de nota de crédito
 */
export interface IEventosRtcE211128V100DetEvento {
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
}
