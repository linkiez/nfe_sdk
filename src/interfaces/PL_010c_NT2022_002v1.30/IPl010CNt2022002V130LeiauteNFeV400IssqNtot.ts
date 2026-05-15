/**
 * Totais referentes ao ISSQN
 */
export interface IPl010CNt2022002V130LeiauteNFeV400IssqNtot {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor Total dos Serviços sob não-incidência ou não tributados pelo ICMS
   */
  vServ?: unknown;
  /**
   * Base de Cálculo do ISS
   */
  vBC?: unknown;
  /**
   * Valor Total do ISS
   */
  vISS?: unknown;
  /**
   * Valor do PIS sobre serviços
   */
  vPIS?: unknown;
  /**
   * Valor do COFINS sobre serviços
   */
  vCOFINS?: unknown;
  /**
   * Data da prestação do serviço (AAAA-MM-DD)
   */
  dCompet?: unknown;
  /**
   * Valor dedução para redução da base de cálculo
   */
  vDeducao?: unknown;
  /**
   * Valor outras retenções
   */
  vOutro?: unknown;
  /**
   * Valor desconto incondicionado
   */
  vDescIncond?: unknown;
  /**
   * Valor desconto condicionado
   */
  vDescCond?: unknown;
  /**
   * Valor Total Retenção ISS
   */
  vISSRet?: unknown;
}
