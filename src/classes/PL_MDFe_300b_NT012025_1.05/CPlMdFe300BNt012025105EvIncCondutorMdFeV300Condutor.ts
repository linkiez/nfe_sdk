import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações do(s) Condutor(s) do veículo
 */
export class CPlMdFe300BNt012025105EvIncCondutorMdFeV300Condutor {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * CPF do Condutor
   */
  public CPF?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvIncCondutorMdFeV300Condutor instance.
   * Schema context: Informações do(s) Condutor(s) do veículo
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EvIncCondutorMdFeV300Condutor,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105EvIncCondutorMdFeV300Condutor';

    if (props) {
      assignSchemaProperties(this, props, ['CPF']);
    }
  }
}
