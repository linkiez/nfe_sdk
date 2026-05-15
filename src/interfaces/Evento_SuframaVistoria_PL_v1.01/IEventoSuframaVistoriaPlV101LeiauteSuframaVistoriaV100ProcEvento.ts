import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento } from '../../classes/Evento_SuframaVistoria_PL_v1.01/CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento';

import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento } from '../../classes/Evento_SuframaVistoria_PL_v1.01/CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento;
}
