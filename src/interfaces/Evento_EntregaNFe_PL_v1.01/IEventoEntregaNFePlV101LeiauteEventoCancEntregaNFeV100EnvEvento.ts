import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento;
}
