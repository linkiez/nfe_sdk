import { CPlMdFe300BNt012025105MdfeModalAereoV300Aereo } from './CPlMdFe300BNt012025105MdfeModalAereoV300Aereo';

/**
 * Runtime class for CPlMdFe300BNt012025105MdfeModalAereoV300.
 */
export class CPlMdFe300BNt012025105MdfeModalAereoV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Informações do modal Aéreo
   */
  public aereo?: CPlMdFe300BNt012025105MdfeModalAereoV300Aereo;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalAereoV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105MdfeModalAereoV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeModalAereoV300) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalAereoV300';

    if (props) {
      this.aereo = props.aereo
        ? new CPlMdFe300BNt012025105MdfeModalAereoV300Aereo(props.aereo)
        : undefined;
    }
  }
}
