import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento } from '../../classes/Evento_SuframaVistoria_PL_v1.01/CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento;
}
