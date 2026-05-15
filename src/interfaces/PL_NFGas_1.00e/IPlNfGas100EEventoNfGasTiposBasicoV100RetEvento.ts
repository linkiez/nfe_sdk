import { CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EEventoNfGasTiposBasicoV100InfEvento';

/**
 * Tipo retorno do Evento
 */
export interface IPlNfGas100EEventoNfGasTiposBasicoV100RetEvento {
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
   * Schema attribute versao.
   */
  $versao?: any;
}
