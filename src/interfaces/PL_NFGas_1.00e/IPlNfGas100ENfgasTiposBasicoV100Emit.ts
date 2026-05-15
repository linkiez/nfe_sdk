import { CPlNfGas100ENfgasTiposBasicoV100EndeEmi } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100EndeEmi';

/**
 * Identificação do Emitente do documento fiscal
 */
export interface IPlNfGas100ENfgasTiposBasicoV100Emit {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * CNPJ do emitente Informar zeros não significativos
   */
  CNPJ?: unknown;
  /**
   * Inscrição Estadual do emitente
   */
  IE?: unknown;
  /**
   * Endereço do emitente
   */
  enderEmit?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;
}
