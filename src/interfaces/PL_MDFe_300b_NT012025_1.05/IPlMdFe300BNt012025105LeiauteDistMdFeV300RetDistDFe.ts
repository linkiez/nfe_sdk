import { CPlMdFe300BNt012025105LeiauteDistMdFeV300LoteDistDFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105LeiauteDistMdFeV300LoteDistDFe';

import { TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe';

/**
 * Schema XML de validação do lote de retorno de documentos ficais eletronicos
 */
export interface IPlMdFe300BNt012025105LeiauteDistMdFeV300RetDistDFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que atendeu a pedido de distribuição de DF-e
   */
  verAplic?: unknown;
  /**
   * código do status de resultado da pesquisa
   */
  cStat?: unknown;
  /**
   * descrição do resultado do pesquisa
   */
  xMotivo?: unknown;
  /**
   * último NSU
   */
  ultNSU?: unknown;
  /**
   * Tipo Versão
   */
  $versao?: TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe;
}
