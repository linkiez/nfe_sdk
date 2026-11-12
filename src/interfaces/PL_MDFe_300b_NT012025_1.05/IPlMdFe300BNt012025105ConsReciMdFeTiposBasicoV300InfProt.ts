/**
 * Dados do protocolo de status
 */
export interface IPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfProt {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou o MDF-e
   */
  verAplic?: unknown;
  /**
   * Chaves de acesso do MDF-e,
   */
  chMDFe?: unknown;
  /**
   * Número do Protocolo de Status do MDF-e.
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
