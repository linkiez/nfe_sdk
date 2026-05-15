import { CEventoAverbPlV101LeiauteAverbV100InfEvento } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101LeiauteAverbV100InfEvento';

import { TEventoAverbPlV101LeiauteAverbV100VerEvento } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101LeiauteAverbV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export interface IEventoAverbPlV101LeiauteAverbV100TretEvento {
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
  infEvento?: CEventoAverbPlV101LeiauteAverbV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoAverbPlV101LeiauteAverbV100VerEvento;
}
