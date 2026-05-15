import { CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento } from '../../classes/Evento_SuframaVistoria_PL_v1.01/CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento';

import { TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge } from '../../types/Evento_SuframaVistoria_PL_v1.01/TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
   */
  cOrgao?: TEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100COrgaoIbge;
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
   * Schema XML de validação do evento doVistoria SUFRAMA 990900
   */
  detEvento?: CEventoSuframaVistoriaPlV101LeiauteSuframaVistoriaV100DetEvento;
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
