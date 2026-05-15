import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento } from '../../classes/Evento_SuframaInternaliza_PL_v1.01/CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100RetEnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que recebeu o Evento
   */
  verAplic?: unknown;
  /**
   * Código do òrgao que registrou o Evento
   */
  cOrgao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge;
  /**
   * Código do status da registro do Evento
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do registro do Evento
   */
  xMotivo?: unknown;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100TretEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100VerEnvEvento;
}
