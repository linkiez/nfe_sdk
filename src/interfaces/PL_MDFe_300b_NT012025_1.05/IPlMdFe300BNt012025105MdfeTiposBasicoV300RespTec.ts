import { TPlMdFe300BNt012025105MdfeTiposBasicoV300Email } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300Email';

/**
 * Tipo Dados da Responsável Técnico
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico.
   */
  CNPJ?: unknown;
  /**
   * Email da pessoa jurídica a ser contatada
   */
  email?: TPlMdFe300BNt012025105MdfeTiposBasicoV300Email;
}
