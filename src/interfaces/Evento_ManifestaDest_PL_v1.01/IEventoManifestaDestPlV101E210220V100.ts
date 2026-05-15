import { CEventoManifestaDestPlV101E210220V100DetEvento } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101E210220V100DetEvento';

/**
 * Type contract for IEventoManifestaDestPlV101E210220V100.
 */
export interface IEventoManifestaDestPlV101E210220V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento de desconhecimento da operação
   */
  detEvento?: CEventoManifestaDestPlV101E210220V100DetEvento;
}
