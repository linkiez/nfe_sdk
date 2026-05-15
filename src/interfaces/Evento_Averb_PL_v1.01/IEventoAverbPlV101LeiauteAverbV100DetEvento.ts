import { CEventoAverbPlV101LeiauteAverbV100ItensAverbados } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101LeiauteAverbV100ItensAverbados';

/**
 * Schema XML de validação do evento de averbação da NFe (e790700)
 */
export interface IEventoAverbPlV101LeiauteAverbV100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Versão do aplicativo do Autor do evento
   */
  verAplic?: unknown;
  /**
   * Informações dos itens da NF-e do evento.
   */
  itensAverbados?: CEventoAverbPlV101LeiauteAverbV100ItensAverbados;
}
