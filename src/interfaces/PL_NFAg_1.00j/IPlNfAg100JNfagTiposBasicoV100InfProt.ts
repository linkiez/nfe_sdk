/**
 * Dados do protocolo de status
 */
export interface IPlNfAg100JNfagTiposBasicoV100InfProt {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou a NFAg
   */
  verAplic?: unknown;
  /**
   * Chave de acesso da NFAg
   */
  chNFAg?: unknown;
  /**
   * Data e hora de processamento, no formato AAAA-MM-DDTHH:MM:SS TZD.
   */
  dhRecbto?: unknown;
  /**
   * Número do Protocolo de Status da NFAg.
   */
  nProt?: unknown;
  /**
   * Digest Value da NFAg processado. Utilizado para conferir a integridade da NFAg original.
   */
  digVal?: unknown;
  /**
   * Descrição literal do status da NFAg
   */
  xMotivo?: unknown;
}
