import { CEventoGenericoPlV101LeiauteEventoV100Evento } from '../../classes/Evento_Generico_PL_v1.01/CEventoGenericoPlV101LeiauteEventoV100Evento';

import { CEventoGenericoPlV101LeiauteEventoV100RetEvento } from '../../classes/Evento_Generico_PL_v1.01/CEventoGenericoPlV101LeiauteEventoV100RetEvento';

import { TEventoGenericoPlV101LeiauteEventoV100VerEvento } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoGenericoPlV101LeiauteEventoV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoGenericoPlV101LeiauteEventoV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoGenericoPlV101LeiauteEventoV100RetEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEvento;
}
