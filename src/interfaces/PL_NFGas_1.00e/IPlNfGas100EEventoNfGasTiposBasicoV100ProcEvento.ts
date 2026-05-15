import { CPlNfGas100EEventoNfGasTiposBasicoV100Evento } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EEventoNfGasTiposBasicoV100Evento';

import { CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento';

import { TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento } from '../../types/PL_NFGas_1.00e/TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IPlNfGas100EEventoNfGasTiposBasicoV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  eventoNFGas?: CPlNfGas100EEventoNfGasTiposBasicoV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEventoNFGas?: CPlNfGas100EEventoNfGasTiposBasicoV100RetEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento;
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
