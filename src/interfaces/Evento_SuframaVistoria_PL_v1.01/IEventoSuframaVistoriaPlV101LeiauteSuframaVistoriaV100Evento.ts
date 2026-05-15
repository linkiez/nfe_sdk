import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento } from '../../classes/Evento_SuframaVistoria_PL_v1.01/CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento';

/**
 * Tipo Evento
 */
export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100Evento {
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
  infEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEvento;
}
