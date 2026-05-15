import { CEventoEpecPlV101LeiauteEpecV100InfEvento } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101LeiauteEpecV100InfEvento';

import { TEventoEpecPlV101LeiauteEpecV100VerEvento } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export interface IEventoEpecPlV101LeiauteEpecV100RetEvento {
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
  infEvento?: CEventoEpecPlV101LeiauteEpecV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoEpecPlV101LeiauteEpecV100VerEvento;
}
