import { CEventoAverbPlV101LeiauteAverbV100Evento } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101LeiauteAverbV100Evento';

import { TEventoAverbPlV101LeiauteAverbV100VerEnvEvento } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101LeiauteAverbV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoAverbPlV101LeiauteAverbV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoAverbPlV101LeiauteAverbV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoAverbPlV101LeiauteAverbV100VerEnvEvento;
}
