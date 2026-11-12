import { TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe';

/**
 * Schema XML de validação da área de dados da mensagem da solicitação de distribuição de DF-e
 */
export interface IPlMdFe300BNt012025105LeiauteDistMdFeV300DistDFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que solicitou a distribuição de DF-e
   */
  verAplic?: unknown;
  /**
   * último NSU recebido, caso seja informado com zero, o Ambiente Autorizador tentará localizar o primeiro DF-e existente.
   */
  ultNSU?: unknown;
  /**
   * Tipo Versão
   */
  $versao?: TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe;
}
