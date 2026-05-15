import { CEventoSuframaInternalizaPlV101E990910V100DetEvento } from '../../classes/Evento_SuframaInternaliza_PL_v1.01/CEventoSuframaInternalizaPlV101E990910V100DetEvento';

/**
 * Type contract for IEventoSuframaInternalizaPlV101E990910V100.
 */
export interface IEventoSuframaInternalizaPlV101E990910V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento do Confirmação de Internalização da Mercadoria na SUFRAMA 990910
   */
  detEvento?: CEventoSuframaInternalizaPlV101E990910V100DetEvento;
}
