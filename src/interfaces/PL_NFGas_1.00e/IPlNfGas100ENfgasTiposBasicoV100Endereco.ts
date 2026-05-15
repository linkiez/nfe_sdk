import { TPlNfGas100ENfgasTiposBasicoV100Email } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Email';

/**
 * Tipo Dados do Endereço
 */
export interface IPlNfGas100ENfgasTiposBasicoV100Endereco {
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
  email?: TPlNfGas100ENfgasTiposBasicoV100Email;
}
