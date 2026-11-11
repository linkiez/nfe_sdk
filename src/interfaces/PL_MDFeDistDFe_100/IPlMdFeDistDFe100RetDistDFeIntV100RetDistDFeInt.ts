import { CPlMdFeDistDFe100RetDistDFeIntV100LoteDistDFeInt } from '../../classes/PL_MDFeDistDFe_100/CPlMdFeDistDFe100RetDistDFeIntV100LoteDistDFeInt';

/**
 * Schema do resultado do pedido de distribuição de DF-e de interesse
 */
export interface IPlMdFeDistDFe100RetDistDFeIntV100RetDistDFeInt {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Web Service MDFeDistribuicaoDFe
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
  loteDistDFeInt?: CPlMdFeDistDFe100RetDistDFeIntV100LoteDistDFeInt;
}
