import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento';

import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento;
}
