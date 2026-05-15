import { CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento';

import { TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento } from '../../types/PL_NFAg_1.00j/TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento';

/**
 * Tipo Evento
 */
export interface IPlNfAg100JEventoNfAgTiposBasicoV100Evento {
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
  infEvento?: CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TPlNfAg100JEventoNfAgTiposBasicoV100VerEvento;
}
