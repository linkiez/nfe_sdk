import { CEventoEconfV100LeiauteEventoEConfV100TretEvento } from '../../classes/Evento_Econf_v1.00/CEventoEconfV100LeiauteEventoEConfV100TretEvento';

import { TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento } from '../../types/Evento_Econf_v1.00/TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoEconfV100LeiauteEventoEConfV100RetEnvEvento {
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
  retEvento?: CEventoEconfV100LeiauteEventoEConfV100TretEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoEconfV100LeiauteEventoEConfV100VerEnvEvento;
}
