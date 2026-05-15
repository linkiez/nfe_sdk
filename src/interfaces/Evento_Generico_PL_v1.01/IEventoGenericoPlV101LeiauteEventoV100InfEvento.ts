import { CEventoGenericoPlV101LeiauteEventoV100DetEvento } from '../../classes/Evento_Generico_PL_v1.01/CEventoGenericoPlV101LeiauteEventoV100DetEvento';

import { TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge } from '../../types/Evento_Generico_PL_v1.01/TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IEventoGenericoPlV101LeiauteEventoV100InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
   */
  cOrgao?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
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
  detEvento?: CEventoGenericoPlV101LeiauteEventoV100DetEvento;
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
  cOrgaoAutor?: TEventoGenericoPlV101LeiauteEventoV100COrgaoIbge;
  /**
   * Número do protocolo de registro do evento
   */
  nProt?: unknown;
}
