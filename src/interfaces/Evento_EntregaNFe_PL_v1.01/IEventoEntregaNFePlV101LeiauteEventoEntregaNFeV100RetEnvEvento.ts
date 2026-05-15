import { CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento';

import { TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100RetEnvEvento {
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
  retEvento?: CEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100TretEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoEntregaNFePlV101LeiauteEventoEntregaNFeV100VerEnvEvento;
}
