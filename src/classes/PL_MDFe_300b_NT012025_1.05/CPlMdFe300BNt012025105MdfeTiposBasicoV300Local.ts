import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Tipo Dados do Local de Origem ou Destino
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300Local {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Código do município (utilizar a tabela do IBGE)
   */
  public cMun?: unknown;
  /**
   * Sigla da UF
   */
  public UF?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300Local instance.
   * Schema context: Tipo Dados do Local de Origem ou Destino
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Local) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300Local';

    if (props) {
      assignSchemaProperties(this, props, ['cMun', 'UF']);
    }
  }
}
