import { CEventoEconfV100LeiauteEventoCancEConfV100InfEvento } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100LeiauteEventoCancEConfV100InfEvento';

import { TEventoEconfV100LeiauteEventoCancEConfV100VerEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoCancEConfV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export interface IEventoEconfV100LeiauteEventoCancEConfV100TretEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  infEvento?: CEventoEconfV100LeiauteEventoCancEConfV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoEconfV100LeiauteEventoCancEConfV100VerEvento;
}
