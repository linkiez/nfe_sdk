import { CPlMdFe300BNt012025105EvEncMdFeV300EvEncMdFe } from './CPlMdFe300BNt012025105EvEncMdFeV300EvEncMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105EvEncMdFeV300.
 */
export class CPlMdFe300BNt012025105EvEncMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema XML de validação do evento do encerramento 110112
   */
  public evEncMDFe?: CPlMdFe300BNt012025105EvEncMdFeV300EvEncMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvEncMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105EvEncMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EvEncMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105EvEncMdFeV300';

    if (props) {
      this.evEncMDFe = props.evEncMDFe
        ? new CPlMdFe300BNt012025105EvEncMdFeV300EvEncMdFe(props.evEncMDFe)
        : undefined;
    }
  }
}
