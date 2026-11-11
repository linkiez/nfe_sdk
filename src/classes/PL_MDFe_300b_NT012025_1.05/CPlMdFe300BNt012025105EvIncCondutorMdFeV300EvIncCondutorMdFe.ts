import { CPlMdFe300BNt012025105EvIncCondutorMdFeV300Condutor } from './CPlMdFe300BNt012025105EvIncCondutorMdFeV300Condutor';

/**
 * Schema XML de validação do evento de inclusao de condutor 110114
 */
export class CPlMdFe300BNt012025105EvIncCondutorMdFeV300EvIncCondutorMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Informações do(s) Condutor(s) do veículo
   */
  public condutor?: CPlMdFe300BNt012025105EvIncCondutorMdFeV300Condutor;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvIncCondutorMdFeV300EvIncCondutorMdFe instance.
   * Schema context: Schema XML de validação do evento de inclusao de condutor 110114
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EvIncCondutorMdFeV300EvIncCondutorMdFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105EvIncCondutorMdFeV300EvIncCondutorMdFe';

    if (props) {
      this.condutor = props.condutor
        ? new CPlMdFe300BNt012025105EvIncCondutorMdFeV300Condutor(
            props.condutor,
          )
        : undefined;
    }
  }
}
