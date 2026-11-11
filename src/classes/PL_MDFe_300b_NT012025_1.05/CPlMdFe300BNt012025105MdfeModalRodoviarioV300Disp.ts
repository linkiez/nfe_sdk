import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações dos dispositivos do Vale Pedágio
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300Disp {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Valor do Vale-Pedagio Valor do Vale-Pedágio obrigatório necessário à livre circulação, desde a origem da operação de transporte até o destino, do transportador contratado.
   */
  public vValePed?: unknown;

  //choice

  /**
   * CNPJ do responsável pelo pagamento do Vale-Pedágio - responsável pelo pagamento do Vale Pedágio. Informar somente quando o responsável não for o emitente do MDF-e. - Informar os zeros não significativos.
   * @param arg - Branch value assigned to CNPJPg.
   */
  public CNPJPg(arg: unknown) {
    delete (this as any).CPFPg;
    (this as any).CNPJPg = arg;
  }

  //choice

  /**
   * CNPJ do responsável pelo pagamento do Vale-Pedágio Informar os zeros não significativos.
   * @param arg - Branch value assigned to CPFPg.
   */
  public CPFPg(arg: unknown) {
    delete (this as any).CNPJPg;
    (this as any).CPFPg = arg;
  }

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300Disp instance.
   * Schema context: Informações dos dispositivos do Vale Pedágio
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Disp,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300Disp';

    if (props) {
      assignSchemaProperties(this, props, ['vValePed']);
    }
  }
}
