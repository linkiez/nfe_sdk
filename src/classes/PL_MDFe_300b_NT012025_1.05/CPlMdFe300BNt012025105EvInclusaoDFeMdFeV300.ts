import { CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300EvIncDFeMdFe } from './CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300EvIncDFeMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300.
 */
export class CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema XML de validação do evento de inclusão de DFe 110115
   */
  public evIncDFeMDFe?: CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300EvIncDFeMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300';

    if (props) {
      this.evIncDFeMDFe = props.evIncDFeMDFe
        ? new CPlMdFe300BNt012025105EvInclusaoDFeMdFeV300EvIncDFeMdFe(
            props.evIncDFeMDFe,
          )
        : undefined;
    }
  }
}
