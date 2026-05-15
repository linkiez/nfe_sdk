import { CPlNfAg100JNfagTiposBasicoV100EndeEmi } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100EndeEmi';

/**
 * Identificação do destinatário
 */
export interface IPlNfAg100JNfagTiposBasicoV100Dest {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Inscrição Estadual do destinatário
   */
  IE?: unknown;
  /**
   * Endereço do destinatário / acessante
   */
  enderDest?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;
}
