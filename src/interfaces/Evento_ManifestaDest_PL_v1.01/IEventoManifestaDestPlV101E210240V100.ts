import { CEventoManifestaDestPlV101E210240V100DetEvento } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101E210240V100DetEvento';

/**
 * Type contract for IEventoManifestaDestPlV101E210240V100.
 */
export interface IEventoManifestaDestPlV101E210240V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento de Recusa de Recebimento (Operação não Realizada)
   */
  detEvento?: CEventoManifestaDestPlV101E210240V100DetEvento;
}
