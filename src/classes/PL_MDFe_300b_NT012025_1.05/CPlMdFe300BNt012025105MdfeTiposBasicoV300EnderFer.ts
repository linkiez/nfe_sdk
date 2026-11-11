import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Tipo Dados do Endereço
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300EnderFer {
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
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300EnderFer instance.
   * Schema context: Tipo Dados do Endereço
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300EnderFer,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300EnderFer';

    if (props) {
      assignSchemaProperties(this, props, ['cMun', 'UF']);
    }
  }
}
