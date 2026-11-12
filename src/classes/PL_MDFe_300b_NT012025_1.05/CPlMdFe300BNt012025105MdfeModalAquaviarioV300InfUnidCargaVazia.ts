import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações das Undades de Carga vazias
 */
export class CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidCargaVazia {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação da unidades de carga vazia
   */
  public idUnidCargaVazia?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidCargaVazia instance.
   * Schema context: Informações das Undades de Carga vazias
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidCargaVazia,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidCargaVazia';

    if (props) {
      assignSchemaProperties(this, props, ['idUnidCargaVazia']);
    }
  }
}
