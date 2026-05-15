import { CPlNfAg100JNfagTiposBasicoV100GHistCons } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GHistCons';

/**
 * Grupo de informações da Agência reguladora
 */
export interface IPlNfAg100JNfagTiposBasicoV100GAgencia {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Data de emissão do Selo de segurança do prestador
   */
  dEmissSelo?: unknown;
  /**
   * Histórico de Consumo
   */
  gHistCons?: CPlNfAg100JNfagTiposBasicoV100GHistCons;
}
