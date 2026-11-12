/**
 * Dados do CIOT
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfCiot {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  //choice

  /**
   * Número do CPF responsável pela geração do CIOT Informar os zeros não significativos.
   * @param arg - Branch value assigned to CPF.
   */
  public CPF(arg: unknown) {
    delete (this as any).CNPJ;
    (this as any).CPF = arg;
  }

  //choice

  /**
   * Número do CNPJ responsável pela geração do CIOT Informar os zeros não significativos.
   * @param arg - Branch value assigned to CNPJ.
   */
  public CNPJ(arg: unknown) {
    delete (this as any).CPF;
    (this as any).CNPJ = arg;
  }

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfCiot instance.
   * Schema context: Dados do CIOT
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfCiot,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300InfCiot';
  }
}
