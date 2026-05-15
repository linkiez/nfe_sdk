/**
 * Schema XML de validação do evento de Comprovante de Entrega da NF-e
 */
export interface IEventoInsucessoNFePlV102E110192V100DetEvento {
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
   * Data e hora do final da tentativa entrega. Formato AAAA-MMDDThh:mm:ssTZD
   */
  dhTentativaEntrega?: unknown;
  /**
   * Latitude do ponto de entrega
   */
  latGPS?: unknown;
  /**
   * Longitude do ponto de entrega
   */
  longGPS?: unknown;
  /**
   * Data e hora da geração do hash da tentativa de entrega. Formato AAAA-MMDDThh:mm:ssTZD.
   */
  dhHashTentativaEntrega?: unknown;
}
