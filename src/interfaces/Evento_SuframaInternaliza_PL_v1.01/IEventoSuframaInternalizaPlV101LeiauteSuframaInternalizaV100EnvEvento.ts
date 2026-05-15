import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento } from '../../classes/Evento_SuframaInternaliza_PL_v1.01/CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento;
}
