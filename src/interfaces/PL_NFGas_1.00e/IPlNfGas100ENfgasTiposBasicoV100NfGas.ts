import { CPlNfGas100ENfgasTiposBasicoV100InfNfGas } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100InfNfGas';

import { CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl';

/**
 * Tipo Nota Fiscal de Gas
 */
export interface IPlNfGas100ENfgasTiposBasicoV100NfGas {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Informações da NFGas
   */
  infNFGas?: CPlNfGas100ENfgasTiposBasicoV100InfNfGas;
  /**
   * Informações suplementares da NFGas
   */
  infNFGasSupl?: CPlNfGas100ENfgasTiposBasicoV100InfNfGasSupl;
}
