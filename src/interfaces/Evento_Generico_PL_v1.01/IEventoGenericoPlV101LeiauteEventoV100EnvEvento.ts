import { CEventoGenericoPlV101LeiauteEventoV100Evento } from '../../classes/Evento_Generico_PL_v1.01/CEventoGenericoPlV101LeiauteEventoV100Evento';

import { TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoGenericoPlV101LeiauteEventoV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoGenericoPlV101LeiauteEventoV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento;
}
