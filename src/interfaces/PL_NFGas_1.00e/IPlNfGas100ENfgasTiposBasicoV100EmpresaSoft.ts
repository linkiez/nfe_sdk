import { TPlNfGas100ENfgasTiposBasicoV100Email } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Email';

/**
 * Tipo Dados da Empresa de Software
 */
export interface IPlNfGas100ENfgasTiposBasicoV100EmpresaSoft {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Email da pessoa jurídica/física a ser contatada
   */
  email?: TPlNfGas100ENfgasTiposBasicoV100Email;
}
