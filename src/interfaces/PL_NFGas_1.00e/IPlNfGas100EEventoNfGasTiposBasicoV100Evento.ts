import { CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento';

import { TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento } from '../../types/PL_NFGas_1.00e/TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento';

/**
 * Tipo Evento
 */
export interface IPlNfGas100EEventoNfGasTiposBasicoV100Evento {
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
  infEvento?: CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TPlNfGas100EEventoNfGasTiposBasicoV100VerEvento;
}
