import { CEventoAverbPlV101LeiauteAverbV100TretEvento } from '../../classes/Evento_Averb_PL_v1.01/CEventoAverbPlV101LeiauteAverbV100TretEvento';

import { TEventoAverbPlV101LeiauteAverbV100VerEnvEvento } from '../../types/Evento_Averb_PL_v1.01/TEventoAverbPlV101LeiauteAverbV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoAverbPlV101LeiauteAverbV100RetEnvEvento {
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
  cOrgao?: unknown;
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
  retEvento?: CEventoAverbPlV101LeiauteAverbV100TretEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoAverbPlV101LeiauteAverbV100VerEnvEvento;
}
