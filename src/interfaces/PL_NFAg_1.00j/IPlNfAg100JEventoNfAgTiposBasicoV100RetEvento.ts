import { CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JEventoNfAgTiposBasicoV100InfEvento';

/**
 * Tipo retorno do Evento
 */
export interface IPlNfAg100JEventoNfAgTiposBasicoV100RetEvento {
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
   * Schema attribute versao.
   */
  $versao?: any;
}
