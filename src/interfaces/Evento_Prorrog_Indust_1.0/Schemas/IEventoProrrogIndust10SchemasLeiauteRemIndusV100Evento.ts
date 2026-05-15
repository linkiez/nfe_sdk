import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento';

/**
 * Tipo Evento
 */
export interface IEventoProrrogIndust10SchemasLeiauteRemIndusV100Evento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  infEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100VerEvento;
}
