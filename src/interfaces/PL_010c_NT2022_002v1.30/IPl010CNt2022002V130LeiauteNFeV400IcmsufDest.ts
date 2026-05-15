/**
 * Grupo a ser informado nas vendas interestarduais para consumidor final, não contribuinte de ICMS
 */
export interface IPl010CNt2022002V130LeiauteNFeV400IcmsufDest {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor da Base de Cálculo do ICMS na UF do destinatário.
   */
  vBCUFDest?: unknown;
  /**
   * Valor da Base de Cálculo do FCP na UF do destinatário.
   */
  vBCFCPUFDest?: unknown;
  /**
   * Percentual adicional inserido na alíquota interna da UF de destino, relativo ao Fundo de Combate à Pobreza (FCP) naquela UF.
   */
  pFCPUFDest?: unknown;
  /**
   * Alíquota adotada nas operações internas na UF do destinatário para o produto / mercadoria.
   */
  pICMSUFDest?: unknown;
  /**
   * Percentual de partilha para a UF do destinatário: - 40% em 2016; - 60% em 2017; - 80% em 2018; - 100% a partir de 2019.
   */
  pICMSInterPart?: unknown;
  /**
   * Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) da UF de destino.
   */
  vFCPUFDest?: unknown;
  /**
   * Valor do ICMS de partilha para a UF do destinatário.
   */
  vICMSUFDest?: unknown;
  /**
   * Valor do ICMS de partilha para a UF do remetente. Nota: A partir de 2019, este valor será zero.
   */
  vICMSUFRemet?: unknown;
}
