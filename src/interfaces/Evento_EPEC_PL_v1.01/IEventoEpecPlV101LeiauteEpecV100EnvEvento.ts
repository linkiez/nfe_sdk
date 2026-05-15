import { CEventoEpecPlV101LeiauteEpecV100Evento } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101LeiauteEpecV100Evento';

import { TEventoEpecPlV101LeiauteEpecV100VerEnvEvento } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoEpecPlV101LeiauteEpecV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoEpecPlV101LeiauteEpecV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoEpecPlV101LeiauteEpecV100VerEnvEvento;
}
