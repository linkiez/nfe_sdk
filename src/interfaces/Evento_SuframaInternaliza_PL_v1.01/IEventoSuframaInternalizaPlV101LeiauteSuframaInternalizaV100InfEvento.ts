import { CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento } from '../../classes/Evento_SuframaInternaliza_PL_v1.01/CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento';

import { TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge } from '../../types/Evento_SuframaInternaliza_PL_v1.01/TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
   */
  cOrgao?: TEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100COrgaoIbge;
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
   * Schema XML de validação do evento do Confirmação de Internalização da Mercadoria na SUFRAMA 990910
   */
  detEvento?: CEventoSuframaInternalizaPlV101LeiauteSuframaInternalizaV100DetEvento;
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
