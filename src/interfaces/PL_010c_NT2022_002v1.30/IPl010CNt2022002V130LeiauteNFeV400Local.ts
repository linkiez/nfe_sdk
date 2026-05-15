/**
 * Tipo Dados do Local de Retirada ou Entrega // 24/10/08 - tamanho mínimo // v2.0
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Local {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do município (utilizar a tabela do IBGE)
   */
  cMun?: unknown;
  /**
   * Sigla da UF
   */
  UF?: unknown;
  /**
   * Inscrição Estadual (v2.0)
   */
  IE?: unknown;
}
