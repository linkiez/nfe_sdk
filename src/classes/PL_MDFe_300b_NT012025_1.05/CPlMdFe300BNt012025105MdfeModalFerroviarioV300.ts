import { CPlMdFe300BNt012025105MdfeModalFerroviarioV300Ferrov } from './CPlMdFe300BNt012025105MdfeModalFerroviarioV300Ferrov';

/**
 * Runtime class for CPlMdFe300BNt012025105MdfeModalFerroviarioV300.
 */
export class CPlMdFe300BNt012025105MdfeModalFerroviarioV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Informações do modal Ferroviário
   */
  public ferrov?: CPlMdFe300BNt012025105MdfeModalFerroviarioV300Ferrov;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalFerroviarioV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105MdfeModalFerroviarioV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeModalFerroviarioV300) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalFerroviarioV300';

    if (props) {
      this.ferrov = props.ferrov
        ? new CPlMdFe300BNt012025105MdfeModalFerroviarioV300Ferrov(props.ferrov)
        : undefined;
    }
  }
}
