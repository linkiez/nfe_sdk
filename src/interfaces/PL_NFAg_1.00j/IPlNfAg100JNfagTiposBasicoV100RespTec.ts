import { TPlNfAg100JNfagTiposBasicoV100Email } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Email';

/**
 * Tipo Dados da Responsável Técnico
 */
export interface IPlNfAg100JNfagTiposBasicoV100RespTec {
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
  email?: TPlNfAg100JNfagTiposBasicoV100Email;
}
