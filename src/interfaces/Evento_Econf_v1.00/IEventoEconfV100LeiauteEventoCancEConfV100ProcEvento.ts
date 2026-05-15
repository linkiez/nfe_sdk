import { CEventoEconfV100LeiauteEventoCancEConfV100Evento } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100LeiauteEventoCancEConfV100Evento';

import { CEventoEconfV100LeiauteEventoCancEConfV100TretEvento } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100LeiauteEventoCancEConfV100TretEvento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoCancEConfV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoEconfV100LeiauteEventoCancEConfV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoEconfV100LeiauteEventoCancEConfV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoEconfV100LeiauteEventoCancEConfV100TretEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEvento;
}
