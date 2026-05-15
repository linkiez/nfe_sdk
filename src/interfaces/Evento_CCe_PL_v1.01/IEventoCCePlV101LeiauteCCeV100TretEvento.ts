import { CEventoCCePlV101LeiauteCCeV100InfEvento } from '../../classes/Evento_CCe_PL_v1.01/CEventoCCePlV101LeiauteCCeV100InfEvento';

import { TEventoCCePlV101LeiauteCCeV100VerEvento } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export interface IEventoCCePlV101LeiauteCCeV100TretEvento {
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
  infEvento?: CEventoCCePlV101LeiauteCCeV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoCCePlV101LeiauteCCeV100VerEvento;
}
