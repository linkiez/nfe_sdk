import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento } from '../../classes/Evento_SuframaInternaliza_PL_v1.01/CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento';

import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento } from '../../classes/Evento_SuframaInternaliza_PL_v1.01/CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento;
}
