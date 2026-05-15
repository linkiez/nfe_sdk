import { CEventoCCePlV101LeiauteCCeV100Evento } from '../../classes/Evento_CCe_PL_v1.01/CEventoCCePlV101LeiauteCCeV100Evento';

import { CEventoCCePlV101LeiauteCCeV100TretEvento } from '../../classes/Evento_CCe_PL_v1.01/CEventoCCePlV101LeiauteCCeV100TretEvento';

import { TEventoCCePlV101LeiauteCCeV100VerEvento } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoCCePlV101LeiauteCCeV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoCCePlV101LeiauteCCeV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoCCePlV101LeiauteCCeV100TretEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoCCePlV101LeiauteCCeV100VerEvento;
}
