import { CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento } from '../../classes/Evento_Canc_PL_v1.01/CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento';

import { TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge } from '../../types/Evento_Canc_PL_v1.01/TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IEventoCancPlV101LeiauteEventoCancNFeV100InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 91 para identificar o Ambiente Nacional
   */
  cOrgao?: TEventoCancPlV101LeiauteEventoCancNFeV100COrgaoIbge;
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
   * Schema XML de validação do evento do cancelamento 1101111
   */
  detEvento?: CEventoCancPlV101LeiauteEventoCancNFeV100DetEvento;
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
   * Número do protocolo de registro do evento
   */
  nProt?: unknown;
}
