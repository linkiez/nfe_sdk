/**
 * Informações do Evento de Atualização da Data de Previsão de Entrega
 */
export interface IEventosRtcE112150V100DetEvento {
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
   * Data da previsão de entrega ou disponibilização do bem.
   */
  dPrevEntrega?: unknown;
}
