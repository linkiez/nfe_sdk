import { CEventoEpecPlV101LeiauteEpecV100Evento } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101LeiauteEpecV100Evento';

import { CEventoEpecPlV101LeiauteEpecV100RetEvento } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101LeiauteEpecV100RetEvento';

import { TEventoEpecPlV101LeiauteEpecV100VerEvento } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoEpecPlV101LeiauteEpecV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoEpecPlV101LeiauteEpecV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoEpecPlV101LeiauteEpecV100RetEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoEpecPlV101LeiauteEpecV100VerEvento;
}
