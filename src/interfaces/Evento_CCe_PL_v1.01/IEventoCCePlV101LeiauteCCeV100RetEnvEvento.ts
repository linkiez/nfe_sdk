import { CEventoCCePlV101LeiauteCCeV100TretEvento } from '../../classes/Evento_CCe_PL_v1.01/CEventoCCePlV101LeiauteCCeV100TretEvento';

import { TEventoCCePlV101LeiauteCCeV100COrgaoIbge } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100COrgaoIbge';

import { TEventoCCePlV101LeiauteCCeV100VerEnvEvento } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoCCePlV101LeiauteCCeV100RetEnvEvento {
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
  cOrgao?: TEventoCCePlV101LeiauteCCeV100COrgaoIbge;
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
  retEvento?: CEventoCCePlV101LeiauteCCeV100TretEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoCCePlV101LeiauteCCeV100VerEnvEvento;
}
