/**
 * Tipo Dados do Local de Retirada ou Entrega
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300EndReEnt {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior.
   */
  cMun?: unknown;
  /**
   * Sigla da UF, , informar EX para operações com o exterior.
   */
  UF?: unknown;
}
