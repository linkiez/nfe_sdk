/**
 * Schema da estrutura XML gerada pelo Ambiente Nacional com o conjunto de informações resumidas de uma NF-e
 */
export interface IPlNFeDistDFe103ResNFeV101ResNFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Chave de acesso da NF-e
   */
  chNFe?: unknown;
  /**
   * Inscrição Estadual do Emitente
   */
  IE?: unknown;
  /**
   * Data e Hora de emissão do Documento Fiscal (AAAA-MM-DDThh:mm:ssTZD) ex.: 2012-09-01T13:00:00-03:00
   */
  dhEmi?: unknown;
  /**
   * Valor Total da NF-e
   */
  vNF?: unknown;
  /**
   * Digest Value da NF-e processada. Utilizado para conferir a integridade da NF-e original
   */
  digVal?: unknown;
  /**
   * Data e hora de autorização da NF-e, no formato AAAA-MM-DDTHH:MM:SSTZD
   */
  dhRecbto?: unknown;
  /**
   * Número do Protocolo de Status da NF-e. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 - códiga da UF - 2 posições ano; 10 seqüencial no ano
   */
  nProt?: unknown;
}
