import { CPlMdFe300BNt012025105MdfeModalAquaviarioV300Aquav } from './CPlMdFe300BNt012025105MdfeModalAquaviarioV300Aquav';

/**
 * Runtime class for CPlMdFe300BNt012025105MdfeModalAquaviarioV300.
 */
export class CPlMdFe300BNt012025105MdfeModalAquaviarioV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Informações do modal Aquaviário
   */
  public aquav?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300Aquav;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalAquaviarioV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105MdfeModalAquaviarioV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeModalAquaviarioV300) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalAquaviarioV300';

    if (props) {
      this.aquav = props.aquav
        ? new CPlMdFe300BNt012025105MdfeModalAquaviarioV300Aquav(props.aquav)
        : undefined;
    }
  }
}
