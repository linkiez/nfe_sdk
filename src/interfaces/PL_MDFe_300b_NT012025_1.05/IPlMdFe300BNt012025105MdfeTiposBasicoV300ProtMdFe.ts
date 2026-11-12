import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfFisco } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfFisco';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe';

/**
 * Dados do Recibo do Arquivo
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300ProtMdFe {
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
  infProt?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt;
  /**
   * Mensagem do Fisco
   */
  infFisco?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfFisco;
  /**
   * Tipo Versão do MDF-e - 3.00
   */
  $versao?: TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe;
}
