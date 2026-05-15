import { CEventoAverbPlV101E790700V100DetEvento } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101E790700V100DetEvento';

/**
 * Type contract for IEventoAverbPlV101E790700V100.
 */
export interface IEventoAverbPlV101E790700V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento de averbação da NFe (e790700)
   */
  detEvento?: CEventoAverbPlV101E790700V100DetEvento;
}
