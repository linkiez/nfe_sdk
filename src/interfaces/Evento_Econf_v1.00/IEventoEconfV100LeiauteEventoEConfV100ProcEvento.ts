import { CEventoEconfV100LeiauteEventoEConfV100Evento } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100LeiauteEventoEConfV100Evento';

import { CEventoEconfV100LeiauteEventoEConfV100TretEvento } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100LeiauteEventoEConfV100TretEvento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoEConfV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoEconfV100LeiauteEventoEConfV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoEconfV100LeiauteEventoEConfV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoEconfV100LeiauteEventoEConfV100TretEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEvento;
}
