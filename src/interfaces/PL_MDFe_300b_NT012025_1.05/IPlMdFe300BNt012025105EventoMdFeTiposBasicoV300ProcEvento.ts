import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento';

import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300RetEvento } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300RetEvento';

import { TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento';

/**
 * Tipo procEvento
 */
export interface IPlMdFe300BNt012025105EventoMdFeTiposBasicoV300ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  eventoMDFe?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento;
  /**
   * Tipo retorno do Evento
   */
  retEventoMDFe?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300RetEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento;
  /**
   * Schema attribute ip transmissor.
   */
  $ipTransmissor?: unknown;
  /**
   * Schema attribute n porta con.
   */
  $nPortaCon?: any;
  /**
   * Schema attribute dh conexao.
   */
  $dhConexao?: unknown;
}
