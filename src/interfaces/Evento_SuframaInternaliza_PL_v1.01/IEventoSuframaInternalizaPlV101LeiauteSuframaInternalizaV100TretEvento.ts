import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento } from '../../classes/Evento_SuframaInternaliza_PL_v1.01/CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento {
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
  infEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEvento;
}
