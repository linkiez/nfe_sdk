import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento } from '../../classes/Evento_AtorInteressado_PL_v1.02/CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento';

import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento } from '../../classes/Evento_AtorInteressado_PL_v1.02/CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento;
}
