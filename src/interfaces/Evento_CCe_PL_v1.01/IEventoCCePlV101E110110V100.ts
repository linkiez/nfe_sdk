import { CEventoCCePlV101E110110V100DetEvento } from '../../classes/Evento_CCe_PL_v1.01/CEventoCCePlV101E110110V100DetEvento';

/**
 * Type contract for IEventoCCePlV101E110110V100.
 */
export interface IEventoCCePlV101E110110V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento do carta de correção e1101110
   */
  detEvento?: CEventoCCePlV101E110110V100DetEvento;
}
