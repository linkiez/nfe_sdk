/**
 * Dados do Resultado do Pedido de Cancelamento da Nota Fiscal Eletrônica
 */
export interface IConSitNFeLeiauteConsSitNFeV201InfCanc {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou o pedido de cancelamento
   */
  verAplic?: unknown;
  /**
   * Código do status da mensagem enviada.
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do serviço solicitado.
   */
  xMotivo?: unknown;
  /**
   * código da UF de atendimento
   */
  cUF?: unknown;
  /**
   * Chaves de acesso da NF-e, compostas por: UF do emitente, AAMM da emissão da NFe, CNPJ do emitente, modelo, série e número da NF-e e código numérico + DV.
   */
  chNFe?: unknown;
  /**
   * Data e hora de recebimento, no formato AAAA-MM-DDTHH:MM:SS. Deve ser preenchida com data e hora da gravação no Banco em caso de Confirmação.
   */
  dhRecbto?: unknown;
  /**
   * Número do Protocolo de Status da NF-e. 1 posição (1 – Secretaria de Fazenda Estadual 2 – Receita Federal); 2 - código da UF - 2 posições ano; 10 seqüencial no ano.
   */
  nProt?: unknown;
}
