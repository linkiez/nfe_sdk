import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContrato } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContrato';

/**
 * Grupo de informações dos contratantes do serviço de transporte
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContratante {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Grupo de informações do contrato entre transportador e contratante
   */
  public infContrato?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContrato;

  //choice

  /**
   * Número do CPF do contratante do serviço Informar os zeros não significativos.
   * @param arg - Branch value assigned to CPF.
   */
  public CPF(arg: unknown) {
    delete (this as any).CNPJ;
    (this as any).CPF = arg;
  }

  //choice

  /**
   * Número do CNPJ do contratante do serviço Informar os zeros não significativos.
   * @param arg - Branch value assigned to CNPJ.
   */
  public CNPJ(arg: unknown) {
    delete (this as any).CPF;
    (this as any).CNPJ = arg;
  }

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContratante instance.
   * Schema context: Grupo de informações dos contratantes do serviço de transporte
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContratante,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContratante';

    if (props) {
      this.infContrato = props.infContrato
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfContrato(
            props.infContrato,
          )
        : undefined;
    }
  }
}
