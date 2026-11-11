import { CPlMdFe300BNt012025105EvIncCondutorMdFeV300EvIncCondutorMdFe } from './CPlMdFe300BNt012025105EvIncCondutorMdFeV300EvIncCondutorMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105EvIncCondutorMdFeV300.
 */
export class CPlMdFe300BNt012025105EvIncCondutorMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema XML de validação do evento de inclusao de condutor 110114
   */
  public evIncCondutorMDFe?: CPlMdFe300BNt012025105EvIncCondutorMdFeV300EvIncCondutorMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvIncCondutorMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105EvIncCondutorMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EvIncCondutorMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105EvIncCondutorMdFeV300';

    if (props) {
      this.evIncCondutorMDFe = props.evIncCondutorMDFe
        ? new CPlMdFe300BNt012025105EvIncCondutorMdFeV300EvIncCondutorMdFe(
            props.evIncCondutorMDFe,
          )
        : undefined;
    }
  }
}
