/**
 * Informações do responsável pelo seguro da carga
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfResp {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  //choice

  /**
   * Número do CNPJ do responsável pelo seguro Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte - pessoa jurídica
   * @param arg - Branch value assigned to CNPJ.
   */
  public CNPJ(arg: unknown) {
    delete (this as any).CPF;
    (this as any).CNPJ = arg;
  }

  //choice

  /**
   * Número do CPF do responsável pelo seguro Obrigatório apenas se responsável pelo seguro for (2) responsável pela contratação do transporte - pessoa física
   * @param arg - Branch value assigned to CPF.
   */
  public CPF(arg: unknown) {
    delete (this as any).CNPJ;
    (this as any).CPF = arg;
  }

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfResp instance.
   * Schema context: Informações do responsável pelo seguro da carga
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfResp) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfResp';
  }
}
