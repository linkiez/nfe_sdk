import { CEventoCancPlV101LeiauteEventoCancNFeV100Evento } from '../../classes/Evento_Canc_PL_v1.01/CEventoCancPlV101LeiauteEventoCancNFeV100Evento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoCancPlV101LeiauteEventoCancNFeV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoCancPlV101LeiauteEventoCancNFeV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;
}
