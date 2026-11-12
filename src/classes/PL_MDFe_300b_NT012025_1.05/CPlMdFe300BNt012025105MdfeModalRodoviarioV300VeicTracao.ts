import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300Condutor } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300Condutor';

import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop';

/**
 * Dados do Veículo com a Tração
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Proprietário ou possuidor do Veículo. Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e
   */
  public prop?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop;
  /**
   * Informações do(s) Condutor(es) do veículo
   */
  public condutor?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Condutor;
  /**
   * UF em que veículo está licenciado Sigla da UF de licenciamento do veículo.
   */
  public UF?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao instance.
   * Schema context: Dados do Veículo com a Tração
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicTracao';

    if (props) {
      this.prop = props.prop
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop(props.prop)
        : undefined;
      this.condutor = props.condutor
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300Condutor(
            props.condutor,
          )
        : undefined;
      assignSchemaProperties(this, props, ['UF']);
    }
  }
}
