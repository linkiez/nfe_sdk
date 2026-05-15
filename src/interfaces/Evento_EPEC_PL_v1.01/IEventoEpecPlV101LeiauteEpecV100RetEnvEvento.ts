import { CEventoEpecPlV101LeiauteEpecV100RetEvento } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101LeiauteEpecV100RetEvento';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoIbge } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100COrgaoIbge';

import { TEventoEpecPlV101LeiauteEpecV100VerEnvEvento } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoEpecPlV101LeiauteEpecV100RetEnvEvento {
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
  cOrgao?: TEventoEpecPlV101LeiauteEpecV100COrgaoIbge;
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
  retEvento?: CEventoEpecPlV101LeiauteEpecV100RetEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoEpecPlV101LeiauteEpecV100VerEnvEvento;
}
