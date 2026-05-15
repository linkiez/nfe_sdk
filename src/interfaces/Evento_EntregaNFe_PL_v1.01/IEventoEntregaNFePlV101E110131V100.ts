import { CEventoEntregaNFePlV101E110131V100DetEvento } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101E110131V100DetEvento';

/**
 * Type contract for IEventoEntregaNFePlV101E110131V100.
 */
export interface IEventoEntregaNFePlV101E110131V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento de Cancelamento do Comprovante de Entrega da NF-e
   */
  detEvento?: CEventoEntregaNFePlV101E110131V100DetEvento;
}
