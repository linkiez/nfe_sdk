import { CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento } from '../../classes/Evento_Canc_PL_v1.01/CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge';

import { TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento {
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
  cOrgao?: TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge;
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
  retEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100RetEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;
}
