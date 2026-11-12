import { CPlMdFe300BNt012025105MdfeTiposBasicoV300ProtMdFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300ProtMdFe';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe';

/**
 * Tipo Retorno do Pedido de Autorização do MDF-e
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300RetMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação da UF
   */
  cUF?: unknown;
  /**
   * Versão do Aplicativo que recebeu o Arquivo.
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
   * Dados do Recibo do Arquivo
   */
  protMDFe?: CPlMdFe300BNt012025105MdfeTiposBasicoV300ProtMdFe;
  /**
   * Tipo Versão do MDF-e - 3.00
   */
  $versao?: TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe;
}
