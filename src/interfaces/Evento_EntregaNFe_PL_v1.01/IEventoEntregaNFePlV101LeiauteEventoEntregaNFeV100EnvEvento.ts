import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento';

import { TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento;
}
