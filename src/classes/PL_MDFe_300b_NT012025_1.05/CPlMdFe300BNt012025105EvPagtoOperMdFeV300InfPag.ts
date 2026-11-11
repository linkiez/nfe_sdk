import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105EvPagtoOperMdFeV300Comp } from './CPlMdFe300BNt012025105EvPagtoOperMdFeV300Comp';

import { CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPrazo } from './CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPrazo';

/**
 * Informações do Pagamento do Frete
 */
export class CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Componentes do Pagamentoi do Frete
   */
  public Comp?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300Comp;
  /**
   * Valor Total do Contrato
   */
  public vContrato?: unknown;
  /**
   * Valor do Adiantamento (usar apenas em pagamento à Prazo
   */
  public vAdiant?: unknown;
  /**
   * Informações do pagamento a prazo. Informar somente se indPag for à Prazo
   */
  public infPrazo?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPrazo;

  //choice

  /**
   * Número do CPF do responsável pelo pgto Informar os zeros não significativos.
   * @param arg - Branch value assigned to CPF.
   */
  public CPF(arg: unknown) {
    delete (this as any).CNPJ;
    (this as any).CPF = arg;
  }

  //choice

  /**
   * Número do CNPJ do responsável pelo pgto Informar os zeros não significativos.
   * @param arg - Branch value assigned to CNPJ.
   */
  public CNPJ(arg: unknown) {
    delete (this as any).CPF;
    (this as any).CNPJ = arg;
  }

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag instance.
   * Schema context: Informações do Pagamento do Frete
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag) {
    this['@class'] = '.CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPag';

    if (props) {
      this.Comp = props.Comp
        ? new CPlMdFe300BNt012025105EvPagtoOperMdFeV300Comp(props.Comp)
        : undefined;
      assignSchemaProperties(this, props, ['vContrato', 'vAdiant']);
      this.infPrazo = props.infPrazo
        ? new CPlMdFe300BNt012025105EvPagtoOperMdFeV300InfPrazo(props.infPrazo)
        : undefined;
    }
  }
}
