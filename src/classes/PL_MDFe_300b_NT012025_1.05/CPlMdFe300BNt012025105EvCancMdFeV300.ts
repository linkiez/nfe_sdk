import { CPlMdFe300BNt012025105EvCancMdFeV300EvCancMdFe } from './CPlMdFe300BNt012025105EvCancMdFeV300EvCancMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105EvCancMdFeV300.
 */
export class CPlMdFe300BNt012025105EvCancMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema XML de validação do evento do cancelamento 110111
   */
  public evCancMDFe?: CPlMdFe300BNt012025105EvCancMdFeV300EvCancMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvCancMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105EvCancMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EvCancMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105EvCancMdFeV300';

    if (props) {
      this.evCancMDFe = props.evCancMDFe
        ? new CPlMdFe300BNt012025105EvCancMdFeV300EvCancMdFe(props.evCancMDFe)
        : undefined;
    }
  }
}
