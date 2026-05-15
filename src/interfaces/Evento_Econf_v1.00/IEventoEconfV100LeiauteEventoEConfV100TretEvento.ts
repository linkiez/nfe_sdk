import { CEventoEconfV100LeiauteEventoEConfV100InfEvento } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100LeiauteEventoEConfV100InfEvento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoEConfV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export interface IEventoEconfV100LeiauteEventoEConfV100TretEvento {
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
  infEvento?: CEventoEconfV100LeiauteEventoEConfV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEvento;
}
