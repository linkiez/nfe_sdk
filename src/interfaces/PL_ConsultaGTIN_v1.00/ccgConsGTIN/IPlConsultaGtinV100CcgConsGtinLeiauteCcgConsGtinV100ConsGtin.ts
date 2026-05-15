import { TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin } from '../../../types/PL_ConsultaGTIN_v1.00/ccgConsGTIN/TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin';

/**
 * Tipo Consulta pública Cadastro Centralizado de GTIN
 */
export interface IPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100ConsGtin {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Informar o código GTIN a ser consultado.
   */
  GTIN?: unknown;
  /**
   * Tipo Versão do Leiaute para Consulta Pública GTIN
   */
  $versao?: TPlConsultaGtinV100CcgConsGtinLeiauteCcgConsGtinV100VerConsGtin;
}
