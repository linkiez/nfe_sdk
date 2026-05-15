import { CEventoCancPlV101LeiauteEventoCancNFeV100Evento } from '../../classes/Evento_Canc_PL_v1.01/CEventoCancPlV101LeiauteEventoCancNFeV100Evento';

import { CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento } from '../../classes/Evento_Canc_PL_v1.01/CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoCancPlV101LeiauteEventoCancNFeV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoCancPlV101LeiauteEventoCancNFeV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento;
}
