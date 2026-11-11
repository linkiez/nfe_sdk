import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105MdfeTiposBasicoV300Email } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300Email';

/**
 * Tipo Dados da Responsável Técnico
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * CNPJ da pessoa jurídica responsável técnica pelo sistema utilizado na emissão do documento fiscal eletrônico Informar o CNPJ da pessoa jurídica desenvolvedora do sistema utilizado na emissão do documento fiscal eletrônico.
   */
  public CNPJ?: unknown;
  /**
   * Email da pessoa jurídica a ser contatada
   */
  public email?: TPlMdFe300BNt012025105MdfeTiposBasicoV300Email;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec instance.
   * Schema context: Tipo Dados da Responsável Técnico
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300RespTec';

    if (props) {
      assignSchemaProperties(this, props, ['CNPJ', 'email']);
    }
  }
}
