import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento } from '../../classes/Evento_AtorInteressado_PL_v1.02/CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export interface IEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  infEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEvento;
}
