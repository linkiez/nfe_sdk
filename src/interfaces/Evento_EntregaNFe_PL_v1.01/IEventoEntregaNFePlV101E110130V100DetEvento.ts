/**
 * Schema XML de validação do evento de Comprovante de Entrega da NF-e
 */
export interface IEventoEntregaNFePlV101E110130V100DetEvento {
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
   * Data e hora do final da entrega. Formato AAAA-MMDDThh:mm:ssTZD
   */
  dhEntrega?: unknown;
  /**
   * Latitude do ponto de entrega
   */
  latGPS?: unknown;
  /**
   * Longitude do ponto de entrega
   */
  longGPS?: unknown;
  /**
   * Data e hora da geração do hash do Comprovante de Entrega da NF-e. Formato AAAA-MMDDThh:mm:ssTZD.
   */
  dhHashComprovante?: unknown;
}
