import { CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300EvAlteracaoPagtoServMdFe } from './CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300EvAlteracaoPagtoServMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300.
 */
export class CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema XML de validação do evento de alteração do pagamento do serviçp de transporte 110118
   */
  public evAlteracaoPagtoServMDFe?: CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300EvAlteracaoPagtoServMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300';

    if (props) {
      this.evAlteracaoPagtoServMDFe = props.evAlteracaoPagtoServMDFe
        ? new CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300EvAlteracaoPagtoServMdFe(
            props.evAlteracaoPagtoServMDFe,
          )
        : undefined;
    }
  }
}
