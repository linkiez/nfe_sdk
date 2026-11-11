import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Nome do Município de Carregamento
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunCarrega {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property c Mun Carrega.
   */
  public cMunCarrega?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunCarrega instance.
   * Schema context: Nome do Município de Carregamento
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunCarrega,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunCarrega';

    if (props) {
      assignSchemaProperties(this, props, ['cMunCarrega']);
    }
  }
}
