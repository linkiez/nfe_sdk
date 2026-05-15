/**
 * Totais referentes ao ICMS
 */
export interface IPl010CNt2022002V130LeiauteNFeV400IcmsTot {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * BC do ICMS
   */
  vBC?: unknown;
  /**
   * Valor Total do ICMS
   */
  vICMS?: unknown;
  /**
   * Valor Total do ICMS desonerado
   */
  vICMSDeson?: unknown;
  /**
   * Valor total do ICMS relativo ao Fundo de Combate à Pobreza (FCP) para a UF de destino.
   */
  vFCPUFDest?: unknown;
  /**
   * Valor total do ICMS de partilha para a UF do destinatário
   */
  vICMSUFDest?: unknown;
  /**
   * Valor total do ICMS de partilha para a UF do remetente
   */
  vICMSUFRemet?: unknown;
  /**
   * Valor Total do FCP (Fundo de Combate à Pobreza).
   */
  vFCP?: unknown;
  /**
   * BC do ICMS ST
   */
  vBCST?: unknown;
  /**
   * Valor Total do ICMS ST
   */
  vST?: unknown;
  /**
   * Valor Total do FCP (Fundo de Combate à Pobreza) retido por substituição tributária.
   */
  vFCPST?: unknown;
  /**
   * Valor Total do FCP (Fundo de Combate à Pobreza) retido anteriormente por substituição tributária.
   */
  vFCPSTRet?: unknown;
  /**
   * Valor total da quantidade tributada do ICMS monofásico próprio
   */
  qBCMono?: unknown;
  /**
   * Valor total do ICMS monofásico próprio
   */
  vICMSMono?: unknown;
  /**
   * Valor total da quantidade tributada do ICMS monofásico sujeito a retenção
   */
  qBCMonoReten?: unknown;
  /**
   * Valor total do ICMS monofásico sujeito a retenção
   */
  vICMSMonoReten?: unknown;
  /**
   * Valor total da quantidade tributada do ICMS monofásico retido anteriormente
   */
  qBCMonoRet?: unknown;
  /**
   * Valor do ICMS monofásico retido anteriormente
   */
  vICMSMonoRet?: unknown;
  /**
   * Valor Total dos produtos e serviços
   */
  vProd?: unknown;
  /**
   * Valor Total do Frete
   */
  vFrete?: unknown;
  /**
   * Valor Total do Seguro
   */
  vSeg?: unknown;
  /**
   * Valor Total do Desconto
   */
  vDesc?: unknown;
  /**
   * Valor Total do II
   */
  vII?: unknown;
  /**
   * Valor Total do IPI
   */
  vIPI?: unknown;
  /**
   * Valor Total do IPI devolvido. Deve ser informado quando preenchido o Grupo Tributos Devolvidos na emissão de nota finNFe=4 (devolução) nas operações com não contribuintes do IPI. Corresponde ao total da soma dos campos id: UA04.
   */
  vIPIDevol?: unknown;
  /**
   * Valor do PIS
   */
  vPIS?: unknown;
  /**
   * Valor do COFINS
   */
  vCOFINS?: unknown;
  /**
   * Outras Despesas acessórias
   */
  vOutro?: unknown;
  /**
   * Valor Total da NF-e
   */
  vNF?: unknown;
  /**
   * Valor estimado total de impostos federais, estaduais e municipais
   */
  vTotTrib?: unknown;
}
