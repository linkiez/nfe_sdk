import { TPlNfAg100JNfagTiposBasicoV100Email } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Email';

/**
 * Tipo Dados do Endereço
 */
export interface IPlNfAg100JNfagTiposBasicoV100Endereco {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior.
   */
  cMun?: unknown;
  /**
   * Sigla da UF, informar EX para operações com o exterior.
   */
  UF?: unknown;
  /**
   * Endereço de E-mail
   */
  email?: TPlNfAg100JNfagTiposBasicoV100Email;
}
