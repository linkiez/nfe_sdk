import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Grupo de informações do contrato entre transportador e contratante
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContrato {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Valor global do contrato
   */
  public vContratoGlobal?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContrato instance.
   * Schema context: Grupo de informações do contrato entre transportador e contratante
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContrato,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContrato';

    if (props) {
      assignSchemaProperties(this, props, ['vContratoGlobal']);
    }
  }
}
