import { CEventoGenericoPlV101LeiauteEventoV100RetEvento } from '../../classes/Evento_Generico_PL_v1.01/CEventoGenericoPlV101LeiauteEventoV100RetEvento';

import { TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge';

import { TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoGenericoPlV101LeiauteEventoV100RetEnvEvento {
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
  cOrgao?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
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
  retEvento?: CEventoGenericoPlV101LeiauteEventoV100RetEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoGenericoPlV101LeiauteEventoV100VerEnvEvento;
}
