import { CEventoAverbPlV101E790700V100ItensAverbados } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101E790700V100ItensAverbados';

/**
 * Schema XML de validação do evento de averbação da NFe (e790700)
 */
export interface IEventoAverbPlV101E790700V100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Versão do aplicativo do autor do evento
   */
  verAplic?: unknown;
  /**
   * Informações dos itens da NF-e do evento.
   */
  itensAverbados?: CEventoAverbPlV101E790700V100ItensAverbados;
}
