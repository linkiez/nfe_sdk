/**
 * Schema XML de validação do evento de Cancelamento do Comprovante de Entrega da NF-e
 */
export interface IEventoEntregaNFePlV101E110131V100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property c Orgao Autor.
   */
  cOrgaoAutor?: unknown;
  /**
   * Versão do Aplicativo do Autor do Evento
   */
  verAplic?: unknown;
  /**
   * Número do Protocolo de Autorização do Evento da NF-e a que se refere este cancelamento.
   */
  nProtEvento?: unknown;
}
