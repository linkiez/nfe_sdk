import { CEventoCancPlV101LeiauteEventoCancNFeV100InfEvento } from '../../classes/Evento_Canc_PL_v1.01/CEventoCancPlV101LeiauteEventoCancNFeV100InfEvento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento';

/**
 * Tipo Evento
 */
export interface IEventoCancPlV101LeiauteEventoCancNFeV100Evento {
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
  infEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEvento;
}
