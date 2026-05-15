import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoProrrogIndust10SchemasLeiauteRemIndusV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEnvEvento;
}
