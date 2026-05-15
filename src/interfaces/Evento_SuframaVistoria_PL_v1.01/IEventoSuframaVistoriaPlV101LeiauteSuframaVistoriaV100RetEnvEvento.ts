import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento } from '../../classes/Evento_SuframaVistoria_PL_v1.01/CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100RetEnvEvento {
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
  cOrgao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge;
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
  retEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100TretEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100VerEnvEvento;
}
