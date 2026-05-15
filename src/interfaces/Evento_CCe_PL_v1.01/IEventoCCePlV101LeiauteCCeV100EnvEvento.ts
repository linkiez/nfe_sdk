import { CEventoCCePlV101LeiauteCCeV100Evento } from '../../classes/Evento_CCe_PL_v1.01/CEventoCCePlV101LeiauteCCeV100Evento';

import { TEventoCCePlV101LeiauteCCeV100VerEnvEvento } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoCCePlV101LeiauteCCeV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoCCePlV101LeiauteCCeV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoCCePlV101LeiauteCCeV100VerEnvEvento;
}
