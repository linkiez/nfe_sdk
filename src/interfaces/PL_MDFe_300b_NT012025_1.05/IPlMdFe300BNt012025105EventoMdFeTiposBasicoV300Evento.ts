import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento';

import { TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento';

/**
 * Tipo Evento
 */
export interface IPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  infEvento?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento;
}
