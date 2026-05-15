import { CEventoAverbPlV101LeiauteAverbV100Evento } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101LeiauteAverbV100Evento';

import { CEventoAverbPlV101LeiauteAverbV100TretEvento } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101LeiauteAverbV100TretEvento';

import { TEventoAverbPlV101LeiauteAverbV100VerEvento } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101LeiauteAverbV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoAverbPlV101LeiauteAverbV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoAverbPlV101LeiauteAverbV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoAverbPlV101LeiauteAverbV100TretEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoAverbPlV101LeiauteAverbV100VerEvento;
}
