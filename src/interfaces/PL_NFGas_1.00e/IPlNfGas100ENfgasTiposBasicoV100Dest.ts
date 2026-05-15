import { CPlNfGas100ENfgasTiposBasicoV100EndeEmi } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100EndeEmi';

/**
 * Identificação do destinatário
 */
export interface IPlNfGas100ENfgasTiposBasicoV100Dest {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Inscrição Estadual do destinatário
   */
  IE?: unknown;
  /**
   * Endereço do destinatário
   */
  enderDest?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;
}
