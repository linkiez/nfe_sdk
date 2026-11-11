/**
 * Dados do protocolo de status
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou a NF-3e
   */
  verAplic?: unknown;
  /**
   * Chave de acesso do MDF-e
   */
  chMDFe?: unknown;
  /**
   * Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SS TZD.
   */
  dhRecbto?: unknown;
  /**
   * Número do Protocolo de Status do MDF-e
   */
  nProt?: unknown;
  /**
   * Digest Value do MDF-e processado. Utilizado para conferir a integridade do MDF-e original.
   */
  digVal?: unknown;
  /**
   * Descrição literal do status do MDF-e.
   */
  xMotivo?: unknown;
}
