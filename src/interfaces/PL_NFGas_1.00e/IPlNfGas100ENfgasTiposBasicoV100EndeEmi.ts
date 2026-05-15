import { TPlNfGas100ENfgasTiposBasicoV100Email } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Email';

/**
 * Tipo Dados do Endereço
 */
export interface IPlNfGas100ENfgasTiposBasicoV100EndeEmi {
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
  email?: TPlNfGas100ENfgasTiposBasicoV100Email;
}
