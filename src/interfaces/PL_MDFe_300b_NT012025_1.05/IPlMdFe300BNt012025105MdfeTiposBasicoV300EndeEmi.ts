import { TPlMdFe300BNt012025105MdfeTiposBasicoV300Email } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300Email';

/**
 * Tipo Dados do Endereço
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300EndeEmi {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior.
   */
  cMun?: unknown;
  /**
   * Sigla da UF, , informar EX para operações com o exterior.
   */
  UF?: unknown;
  /**
   * Endereço de E-mail
   */
  email?: TPlMdFe300BNt012025105MdfeTiposBasicoV300Email;
}
