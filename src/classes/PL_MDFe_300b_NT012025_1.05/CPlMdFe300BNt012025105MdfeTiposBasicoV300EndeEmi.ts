import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105MdfeTiposBasicoV300Email } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300Email';

/**
 * Tipo Dados do Endereço
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300EndeEmi {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior.
   */
  public cMun?: unknown;
  /**
   * Sigla da UF, , informar EX para operações com o exterior.
   */
  public UF?: unknown;
  /**
   * Endereço de E-mail
   */
  public email?: TPlMdFe300BNt012025105MdfeTiposBasicoV300Email;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300EndeEmi instance.
   * Schema context: Tipo Dados do Endereço
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300EndeEmi) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300EndeEmi';

    if (props) {
      assignSchemaProperties(this, props, ['cMun', 'UF', 'email']);
    }
  }
}
