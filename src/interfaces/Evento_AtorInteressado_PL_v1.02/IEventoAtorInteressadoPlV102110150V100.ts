import { CEventoAtorInteressadoPlV102110150V100DetEvento } from '../../classes/Evento_AtorInteressado_PL_v1.02/CEventoAtorInteressadoPlV102110150V100DetEvento';

/**
 * Type contract for IEventoAtorInteressadoPlV102110150V100.
 */
export interface IEventoAtorInteressadoPlV102110150V100 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema XML de validação do evento de Ator Interessado na NF-e - Transportador (110150)”
   */
  detEvento?: CEventoAtorInteressadoPlV102110150V100DetEvento;
}
