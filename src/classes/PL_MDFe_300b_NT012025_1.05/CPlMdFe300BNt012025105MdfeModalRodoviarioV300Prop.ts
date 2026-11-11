import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc';

/**
 * Proprietários ou possuidor do Veículo. Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Registro Nacional dos Transportadores Rodoviários de Carga Registro obrigatório do proprietário, co-proprietário ou arrendatário do veículo junto à ANTT para exercer a atividade de transportador rodoviário de cargas por conta de terceiros e mediante remuneração.
   */
  public RNTRC?: TPlMdFe300BNt012025105MdfeModalRodoviarioV300Rntrc;

  //choice

  /**
   * Número do CPF Informar os zeros não significativos.
   * @param arg - Branch value assigned to CPF.
   */
  public CPF(arg: unknown) {
    delete (this as any).CNPJ;
    (this as any).CPF = arg;
  }

  //choice

  /**
   * Número do CNPJ Informar os zeros não significativos.
   * @param arg - Branch value assigned to CNPJ.
   */
  public CNPJ(arg: unknown) {
    delete (this as any).CPF;
    (this as any).CNPJ = arg;
  }

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop instance.
   * Schema context: Proprietários ou possuidor do Veículo. Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop';

    if (props) {
      assignSchemaProperties(this, props, ['RNTRC']);
    }
  }
}
