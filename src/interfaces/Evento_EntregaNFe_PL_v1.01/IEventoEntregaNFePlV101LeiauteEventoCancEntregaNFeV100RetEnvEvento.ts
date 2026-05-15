import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100RetEnvEvento {
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
  retEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100TretEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEnvEvento;
}
