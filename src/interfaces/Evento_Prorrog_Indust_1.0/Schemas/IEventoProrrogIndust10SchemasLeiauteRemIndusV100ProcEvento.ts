import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento';

import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoProrrogIndust10SchemasLeiauteRemIndusV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100RetEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento;
}
