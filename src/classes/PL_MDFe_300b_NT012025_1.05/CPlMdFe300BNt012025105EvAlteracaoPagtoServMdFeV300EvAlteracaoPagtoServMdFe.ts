import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300InfPag } from './CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300InfPag';

/**
 * Schema XML de validação do evento de alteração do pagamento do serviçp de transporte 110118
 */
export class CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300EvAlteracaoPagtoServMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Número do Protocolo de Status do MDF-e.
   */
  public nProt?: unknown;
  /**
   * Informações do Pagamento do Frete
   */
  public infPag?: CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300InfPag;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300EvAlteracaoPagtoServMdFe instance.
   * Schema context: Schema XML de validação do evento de alteração do pagamento do serviçp de transporte 110118
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300EvAlteracaoPagtoServMdFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300EvAlteracaoPagtoServMdFe';

    if (props) {
      assignSchemaProperties(this, props, ['nProt']);
      this.infPag = props.infPag
        ? new CPlMdFe300BNt012025105EvAlteracaoPagtoServMdFeV300InfPag(
            props.infPag,
          )
        : undefined;
    }
  }
}
