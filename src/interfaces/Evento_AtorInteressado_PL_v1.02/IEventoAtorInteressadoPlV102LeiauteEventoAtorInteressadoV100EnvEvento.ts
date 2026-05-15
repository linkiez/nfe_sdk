import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento } from '../../classes/Evento_AtorInteressado_PL_v1.02/CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento;
}
