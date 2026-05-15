/**
 * Schema XML de validação do evento de Cancelamento do Comprovante de Entrega da NF-e
 */
export interface IEventoEconfV100E110751V100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Versão do Aplicativo do Autor do Evento
   */
  verAplic?: unknown;
  /**
   * Número do Protocolo de Autorização do Evento da NF-e a que se refere este cancelamento.
   */
  nProtEvento?: unknown;
}
