import { CEventoSuframaVistoriaPlV101E990900V100DetEvento } from '../../classes/Evento_SuframaVistoria_PL_v1.01/CEventoSuframaVistoriaPlV101E990900V100DetEvento';

/**
 * Type contract for IEventoSuframaVistoriaPlV101E990900V100.
 */
export interface IEventoSuframaVistoriaPlV101E990900V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento doVistoria SUFRAMA 990900
   */
  detEvento?: CEventoSuframaVistoriaPlV101E990900V100DetEvento;
}
