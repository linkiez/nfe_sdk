import { CEventoGenericoPlV101LeiauteEventoV100InfEvento } from '../../classes/Evento_Generico_PL_v1.01/CEventoGenericoPlV101LeiauteEventoV100InfEvento';

import { TEventoGenericoPlV101LeiauteEventoV100VerEvento } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100VerEvento';

/**
 * Tipo Evento
 */
export interface IEventoGenericoPlV101LeiauteEventoV100Evento {
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
  infEvento?: CEventoGenericoPlV101LeiauteEventoV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEvento;
}
