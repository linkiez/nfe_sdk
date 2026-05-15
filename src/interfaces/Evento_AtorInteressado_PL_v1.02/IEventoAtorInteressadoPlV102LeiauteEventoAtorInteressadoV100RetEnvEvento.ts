import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento } from '../../classes/Evento_AtorInteressado_PL_v1.02/CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento';

import { TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento } from '../../types/Evento_AtorInteressado_PL_v1.02/TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEnvEvento {
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
  retEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100RetEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100VerEnvEvento;
}
