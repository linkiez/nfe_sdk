import { TPlNfGas100ENfgasTiposBasicoV100Email } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Email';

/**
 * Tipo Dados da Responsável Técnico
 */
export interface IPlNfGas100ENfgasTiposBasicoV100RespTec {
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
  email?: TPlNfGas100ENfgasTiposBasicoV100Email;
}
