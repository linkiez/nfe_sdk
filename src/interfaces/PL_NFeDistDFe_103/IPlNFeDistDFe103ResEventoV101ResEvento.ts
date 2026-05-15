/**
 * Schema da estrutura XML gerada pelo Ambiente Nacional com o conjunto de informações resumidas de um evento de NF-e
 */
export interface IPlNFeDistDFe103ResEventoV101ResEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 91 para identificar o Ambiente Nacional
   */
  cOrgao?: unknown;
  /**
   * Chave de acesso da NF-e
   */
  chNFe?: unknown;
  /**
   * Data e Hora do Evento, formato UTC (AAAA-MM-DDThh:mm:ssTZD, onde TZD = +hh:mm ou -hh:mm)
   */
  dhEvento?: unknown;
  /**
   * Data e hora de autorização do evento no formato AAAA-MM-DDTHH:MM:SSTZD
   */
  dhRecbto?: unknown;
  /**
   * Número do Protocolo do evento. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 - códiga da UF - 2 posições ano; 10 seqüencial no ano
   */
  nProt?: unknown;
}
