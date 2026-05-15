import { CEventoEconfV100E110750V100DetEvento } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100E110750V100DetEvento';

/**
 * Type contract for IEventoEconfV100E110750V100.
 */
export interface IEventoEconfV100E110750V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento de Conciliação Financeira – ECONF
   */
  detEvento?: CEventoEconfV100E110750V100DetEvento;
}
