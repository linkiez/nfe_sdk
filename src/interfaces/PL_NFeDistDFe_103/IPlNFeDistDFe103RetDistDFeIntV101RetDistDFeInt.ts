import { CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt } from '../../classes/PL_NFeDistDFe_103/CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt';

/**
 * Schema do resultado do pedido de distribuição de DF-e de interesse
 */
export interface IPlNFeDistDFe103RetDistDFeIntV101RetDistDFeInt {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Web Service NFeDistribuicaoDFe
   */
  verAplic?: unknown;
  /**
   * Código do status de processamento da requisição
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do processamento da requisição
   */
  xMotivo?: unknown;
  /**
   * Data e Hora de processamento da requisição no formato AAAA-MM-DDTHH:MM:SSTZD
   */
  dhResp?: unknown;
  /**
   * Último NSU pesquisado no Ambiente Nacional. Se for o caso, o solicitante pode continuar a consulta a partir deste NSU para obter novos resultados.
   */
  ultNSU?: unknown;
  /**
   * Maior NSU existente no Ambiente Nacional para o CNPJ/CPF informado
   */
  maxNSU?: unknown;
  /**
   * Conjunto de informações resumidas e documentos fiscais eletrônicos de interesse da pessoa ou empresa.
   */
  loteDistDFeInt?: CPlNFeDistDFe103RetDistDFeIntV101LoteDistDFeInt;
}
