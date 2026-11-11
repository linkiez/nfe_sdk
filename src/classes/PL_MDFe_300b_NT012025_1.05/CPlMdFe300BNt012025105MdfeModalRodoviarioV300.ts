import { CPlMdFe300BNt012025105MdfeModalRodoviarioV300Rodo } from './CPlMdFe300BNt012025105MdfeModalRodoviarioV300Rodo';

/**
 * Runtime class for CPlMdFe300BNt012025105MdfeModalRodoviarioV300.
 */
export class CPlMdFe300BNt012025105MdfeModalRodoviarioV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Informações do modal Rodoviário
   */
  public rodo?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300Rodo;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalRodoviarioV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105MdfeModalRodoviarioV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeModalRodoviarioV300) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalRodoviarioV300';

    if (props) {
      this.rodo = props.rodo
        ? new CPlMdFe300BNt012025105MdfeModalRodoviarioV300Rodo(props.rodo)
        : undefined;
    }
  }
}
