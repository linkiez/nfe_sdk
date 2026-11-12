import { CPlMdFe300BNt012025105EvPagtoOperMdFeV300EvPagtoOperMdFe } from './CPlMdFe300BNt012025105EvPagtoOperMdFeV300EvPagtoOperMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105EvPagtoOperMdFeV300.
 */
export class CPlMdFe300BNt012025105EvPagtoOperMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema XML de validação do evento de pagamento da operação de transporte 110116
   */
  public evPagtoOperMDFe?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300EvPagtoOperMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvPagtoOperMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105EvPagtoOperMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105EvPagtoOperMdFeV300';

    if (props) {
      this.evPagtoOperMDFe = props.evPagtoOperMDFe
        ? new CPlMdFe300BNt012025105EvPagtoOperMdFeV300EvPagtoOperMdFe(
            props.evPagtoOperMDFe,
          )
        : undefined;
    }
  }
}
