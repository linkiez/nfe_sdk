import { CEventoCancPlV101E110111V100DetEvento } from '../../classes/Evento_Canc_PL_v1.01/CEventoCancPlV101E110111V100DetEvento';

/**
 * Type contract for IEventoCancPlV101E110111V100.
 */
export interface IEventoCancPlV101E110111V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento do cancelamento 1101111
   */
  detEvento?: CEventoCancPlV101E110111V100DetEvento;
}
