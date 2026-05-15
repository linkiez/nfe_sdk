/**
 * Emissão de avulsa, informar os dados do Fisco emitente
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Avulsa {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * CNPJ do Órgão emissor
   */
  CNPJ?: unknown;
  /**
   * Sigla da Unidade da Federação
   */
  UF?: unknown;
  /**
   * Data de emissão do DAR (AAAA-MM-DD)
   */
  dEmi?: unknown;
  /**
   * Valor Total constante no DAR
   */
  vDAR?: unknown;
  /**
   * Data de pagamento do DAR (AAAA-MM-DD)
   */
  dPag?: unknown;
}
