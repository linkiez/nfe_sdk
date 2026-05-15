import { CEventoEconfV100LeiauteEventoEConfV100Evento } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100LeiauteEventoEConfV100Evento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoEconfV100LeiauteEventoEConfV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoEconfV100LeiauteEventoEConfV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento;
}
