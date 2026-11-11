import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações das Undades de Transporte vazias
 */
export class CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidTranspVazia {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação da unidades de transporte vazia
   */
  public idUnidTranspVazia?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidTranspVazia instance.
   * Schema context: Informações das Undades de Transporte vazias
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidTranspVazia,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105MdfeModalAquaviarioV300InfUnidTranspVazia';

    if (props) {
      assignSchemaProperties(this, props, ['idUnidTranspVazia']);
    }
  }
}
