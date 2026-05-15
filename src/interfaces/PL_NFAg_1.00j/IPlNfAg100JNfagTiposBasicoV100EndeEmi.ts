import { TPlNfAg100JNfagTiposBasicoV100Email } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Email';

/**
 * Tipo Dados do Endereço
 */
export interface IPlNfAg100JNfagTiposBasicoV100EndeEmi {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do município (utilizar a tabela do IBGE)
   */
  cMun?: unknown;
  /**
   * Sigla da UF
   */
  UF?: unknown;
  /**
   * Endereço de E-mail
   */
  email?: TPlNfAg100JNfagTiposBasicoV100Email;
}
