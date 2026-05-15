import { CEventoEconfV100LeiauteEventoCancEConfV100Evento } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100LeiauteEventoCancEConfV100Evento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoEconfV100LeiauteEventoCancEConfV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoEconfV100LeiauteEventoCancEConfV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEnvEvento;
}
