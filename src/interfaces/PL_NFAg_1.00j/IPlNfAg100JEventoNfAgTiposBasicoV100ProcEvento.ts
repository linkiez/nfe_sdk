import { CPlNfAg100JEventoNfAgTiposBasicoV100Evento } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JEventoNfAgTiposBasicoV100Evento';

import { CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento';

import { TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento } from '../../types/PL_NFAg_1.00j/TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IPlNfAg100JEventoNfAgTiposBasicoV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  eventoNFAg?: CPlNfAg100JEventoNfAgTiposBasicoV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEventoNFAg?: CPlNfAg100JEventoNfAgTiposBasicoV100RetEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento;
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
