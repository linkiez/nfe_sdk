import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento';

import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento';

import { TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEvento;
}
