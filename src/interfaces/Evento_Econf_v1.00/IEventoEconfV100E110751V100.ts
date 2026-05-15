import { CEventoEconfV100E110751V100DetEvento } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100E110751V100DetEvento';

/**
 * Type contract for IEventoEconfV100E110751V100.
 */
export interface IEventoEconfV100E110751V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento de Cancelamento do Comprovante de Entrega da NF-e
   */
  detEvento?: CEventoEconfV100E110751V100DetEvento;
}
