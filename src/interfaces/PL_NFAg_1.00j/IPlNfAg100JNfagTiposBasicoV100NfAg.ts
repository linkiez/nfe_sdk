import { CPlNfAg100JNfagTiposBasicoV100InfNfAg } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100InfNfAg';

import { CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl';

/**
 * Tipo Nota Fiscal de Agua
 */
export interface IPlNfAg100JNfagTiposBasicoV100NfAg {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Informações da NFAg
   */
  infNFAg?: CPlNfAg100JNfagTiposBasicoV100InfNfAg;
  /**
   * Informações suplementares da NFAg
   */
  infNFAgSupl?: CPlNfAg100JNfagTiposBasicoV100InfNfAgSupl;
}
