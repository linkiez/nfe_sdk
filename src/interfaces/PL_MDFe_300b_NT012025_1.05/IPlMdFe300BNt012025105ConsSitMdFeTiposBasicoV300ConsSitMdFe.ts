/**
 * Tipo Pedido de Consulta da Situação Atual do MDF-e
 */
export interface IPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ConsSitMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Serviço Solicitado
   */
  xServ?: unknown;
  /**
   * Chaves de acesso do MDF-e, compostas por: UF do emitente, AAMM da emissão do MDF-e, CNPJ do emitente, modelo, série, tipo de emissão e número do MDF-e e código numérico + DV.
   */
  chMDFe?: unknown;
  /**
   * Schema attribute versao.
   */
  $versao?: any;
}
