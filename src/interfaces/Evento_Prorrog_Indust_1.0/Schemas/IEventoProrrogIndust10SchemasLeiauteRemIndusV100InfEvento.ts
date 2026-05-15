import { CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento } from '../../../classes/Evento_Prorrog_Indust_1.0/Schemas/CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento';

import { TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge } from '../../../types/Evento_Prorrog_Indust_1.0/Schemas/TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IEventoProrrogIndust10SchemasLeiauteRemIndusV100InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
   */
  cOrgao?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Chave de Acesso NF-e vinculada
   */
  chNFe?: unknown;
  /**
   * Schema property dh Evento.
   */
  dhEvento?: unknown;
  /**
   * informações específicas do evento
   */
  detEvento?: CEventoProrrogIndust10SchemasLeiauteRemIndusV100DetEvento;
  /**
   * Versão do Aplicativo que recebeu o Evento
   */
  verAplic?: unknown;
  /**
   * Código do status da registro do Evento
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do registro do Evento
   */
  xMotivo?: unknown;
  /**
   * Código do órgão de autor do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
   */
  cOrgaoAutor?: TEventoProrrogIndust10SchemasLeiauteRemIndusV100COrgaoIbge;
  /**
   * Número do protocolo de registro do evento
   */
  nProt?: unknown;
}
