/**
 * Dados da retenção ICMS do Transporte
 */
export interface IPl010CNt2022002V130LeiauteNFeV400RetTransp {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do Serviço
   */
  vServ?: unknown;
  /**
   * BC da Retenção do ICMS
   */
  vBCRet?: unknown;
  /**
   * Alíquota da Retenção
   */
  pICMSRet?: unknown;
  /**
   * Valor do ICMS Retido
   */
  vICMSRet?: unknown;
  /**
   * Código do Município de Ocorrência do Fato Gerador (utilizar a tabela do IBGE)
   */
  cMunFG?: unknown;
}
