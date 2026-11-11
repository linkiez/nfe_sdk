import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Tipo Dados do Local de Retirada ou Entrega
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300EndReEnt {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Código do município (utilizar a tabela do IBGE), informar 9999999 para operações com o exterior.
   */
  public cMun?: unknown;
  /**
   * Sigla da UF, , informar EX para operações com o exterior.
   */
  public UF?: unknown;

  //choice

  /**
   * Número do CNPJ
   * @param arg - Branch value assigned to CNPJ.
   */
  public CNPJ(arg: unknown) {
    delete (this as any).CPF;
    (this as any).CNPJ = arg;
  }

  //choice

  /**
   * Número do CPF
   * @param arg - Branch value assigned to CPF.
   */
  public CPF(arg: unknown) {
    delete (this as any).CNPJ;
    (this as any).CPF = arg;
  }

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300EndReEnt instance.
   * Schema context: Tipo Dados do Local de Retirada ou Entrega
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300EndReEnt,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300EndReEnt';

    if (props) {
      assignSchemaProperties(this, props, ['cMun', 'UF']);
    }
  }
}
