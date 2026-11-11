import { CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfFisco } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfFisco';

import { CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfProt } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfProt';

import { TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe';

/**
 * Resultado do processamento do MDF-e
 */
export interface IPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Dados do protocolo de status
   */
  infProt?: CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfProt;
  /**
   * Mensagem do Fisco
   */
  infFisco?: CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfFisco;
  /**
   * Tipo Versão do Consulta de MDF-e - 3.00
   */
  $versao?: TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe;
}
