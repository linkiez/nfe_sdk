import { CEventoEpecPlV101LeiauteEpecV100DetEvento } from '../../classes/Evento_EPEC_PL_v1.01/CEventoEpecPlV101LeiauteEpecV100DetEvento';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoAutor } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100COrgaoAutor';

import { TEventoEpecPlV101LeiauteEpecV100COrgaoIbge } from '../../types/Evento_EPEC_PL_v1.01/TEventoEpecPlV101LeiauteEpecV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IEventoEpecPlV101LeiauteEpecV100InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 91 para identificar o Ambiente Nacional
   */
  cOrgao?: TEventoEpecPlV101LeiauteEpecV100COrgaoIbge;
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
   * Schema XML de validação do evento de emissão prévia em contingência - 110140
   */
  detEvento?: CEventoEpecPlV101LeiauteEpecV100DetEvento;
  /**
   * Schema property c Orgao Autor.
   */
  cOrgaoAutor?: TEventoEpecPlV101LeiauteEpecV100COrgaoAutor;
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
  /**
   * Relação de Chaves de Acesso de EPEC não conciliados (pendentes de conciliação) existentes no AN.
   */
  chNFePend?: unknown;
}
