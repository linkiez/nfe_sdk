import { TPlNfAg100JNfagTiposBasicoV100Email } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Email';

/**
 * Tipo Dados da Empresa de Software
 */
export interface IPlNfAg100JNfagTiposBasicoV100EmpresaSoft {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Email da pessoa jurídica/física a ser contatada
   */
  email?: TPlNfAg100JNfagTiposBasicoV100Email;
}
