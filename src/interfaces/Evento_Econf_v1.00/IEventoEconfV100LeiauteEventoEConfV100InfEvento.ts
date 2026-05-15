/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IEventoEconfV100LeiauteEventoEConfV100InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Schema property det Evento.
   */
  detEvento?: unknown;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 91 para identificar o Ambiente Nacional
   */
  cOrgao?: unknown;
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
