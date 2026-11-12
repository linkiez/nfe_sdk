import { CPlMdFe300BNt012025105EvConfirmaServMdFeV300EvConfirmaServMdFe } from './CPlMdFe300BNt012025105EvConfirmaServMdFeV300EvConfirmaServMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105EvConfirmaServMdFeV300.
 */
export class CPlMdFe300BNt012025105EvConfirmaServMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema XML de validação do evento de confirmação do serviço de transporte 110117
   */
  public evConfirmaServMDFe?: CPlMdFe300BNt012025105EvConfirmaServMdFeV300EvConfirmaServMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvConfirmaServMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105EvConfirmaServMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EvConfirmaServMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105EvConfirmaServMdFeV300';

    if (props) {
      this.evConfirmaServMDFe = props.evConfirmaServMDFe
        ? new CPlMdFe300BNt012025105EvConfirmaServMdFeV300EvConfirmaServMdFe(
            props.evConfirmaServMDFe,
          )
        : undefined;
    }
  }
}
