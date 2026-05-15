import { CEventoCCePlV101LeiauteCCeV100DetEvento } from '../../classes/Evento_CCe_PL_v1.01/CEventoCCePlV101LeiauteCCeV100DetEvento';

import { TEventoCCePlV101LeiauteCCeV100COrgaoIbge } from '../../types/Evento_CCe_PL_v1.01/TEventoCCePlV101LeiauteCCeV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IEventoCCePlV101LeiauteCCeV100InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
   */
  cOrgao?: TEventoCCePlV101LeiauteCCeV100COrgaoIbge;
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
   * Evento do carta de correção e1101110
   */
  detEvento?: CEventoCCePlV101LeiauteCCeV100DetEvento;
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
