import { TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin } from '../../../types/PL_ConsultaGTIN_v1.00/ccgConsGTIN/TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin';

/**
 * Tipo Retorno da Consulta pública Cadastro Centralizado de GTIN
 */
export interface IPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100RetConsGtin {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Versão da aplicação da SVRS.
   */
  verAplic?: unknown;
  /**
   * Código do Status da resposta (resultado do processamento do lote).
   */
  cStat?: unknown;
  /**
   * Descrição literal do Status da resposta (resultado do processamento do lote).
   */
  xMotivo?: unknown;
  /**
   * Data e hora da resposta, no formato AAAA-MM-DDThh:mm:ssTZD (UTC - Universal Coordinated Time).
   */
  dhResp?: unknown;
  /**
   * (idem mensagem de entrada) Código GTIN.
   */
  GTIN?: unknown;
  /**
   * Tipo do GTIN, quantidade de dígitos (8, 12, 13 ou 14).
   */
  tpGTIN?: unknown;
  /**
   * Tipo Versão do Leiaute para Consulta Pública GTIN
   */
  $versao?: TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin;
}
