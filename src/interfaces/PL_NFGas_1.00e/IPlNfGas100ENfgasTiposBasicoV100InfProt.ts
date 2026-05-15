/**
 * Dados do protocolo de status
 */
export interface IPlNfGas100ENfgasTiposBasicoV100InfProt {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou a NFGas
   */
  verAplic?: unknown;
  /**
   * Chave de acesso da NFGas
   */
  chNFGas?: unknown;
  /**
   * Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SS TZD.
   */
  dhRecbto?: unknown;
  /**
   * Número do Protocolo de Status da NFGas.
   */
  nProt?: unknown;
  /**
   * Digest Value da NFGas processado. Utilizado para conferir a integridade da NFGas original.
   */
  digVal?: unknown;
  /**
   * Descrição literal do status da NFGas
   */
  xMotivo?: unknown;
}
