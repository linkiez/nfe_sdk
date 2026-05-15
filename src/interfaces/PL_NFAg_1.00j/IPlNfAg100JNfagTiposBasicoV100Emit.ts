import { CPlNfAg100JNfagTiposBasicoV100EndeEmi } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100EndeEmi';

/**
 * Identificação do Emitente do documento fiscal
 */
export interface IPlNfAg100JNfagTiposBasicoV100Emit {
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
  enderEmit?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;
}
