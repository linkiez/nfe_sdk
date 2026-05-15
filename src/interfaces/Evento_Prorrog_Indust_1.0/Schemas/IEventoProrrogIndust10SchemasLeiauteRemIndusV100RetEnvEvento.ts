import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEnvEvento {
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
  cOrgao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
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
  retEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento;
}
