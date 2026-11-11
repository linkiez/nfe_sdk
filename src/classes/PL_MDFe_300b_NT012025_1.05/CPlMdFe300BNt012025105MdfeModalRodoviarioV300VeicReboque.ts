import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop';

/**
 * Dados dos reboques
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Proprietários ou possuidor do Veículo. Só preenchido quando o veículo não pertencer à empresa emitente do MDF-e
   */
  public prop?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop;
  /**
   * UF em que veículo está licenciado Sigla da UF de licenciamento do veículo.
   */
  public UF?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque instance.
   * Schema context: Dados dos reboques
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300VeicReboque';

    if (props) {
      this.prop = props.prop
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300Prop(props.prop)
        : undefined;
      assignSchemaProperties(this, props, ['UF']);
    }
  }
}
