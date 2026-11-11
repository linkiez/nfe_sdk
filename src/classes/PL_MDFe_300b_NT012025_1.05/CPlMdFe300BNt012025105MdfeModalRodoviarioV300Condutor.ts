import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações do(s) Condutor(es) do veículo
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300Condutor {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * CPF do Condutor
   */
  public CPF?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300Condutor instance.
   * Schema context: Informações do(s) Condutor(es) do veículo
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Condutor,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300Condutor';

    if (props) {
      assignSchemaProperties(this, props, ['CPF']);
    }
  }
}
