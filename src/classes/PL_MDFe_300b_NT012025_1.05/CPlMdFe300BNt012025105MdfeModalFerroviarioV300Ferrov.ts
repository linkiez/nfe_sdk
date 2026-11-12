import { CPlMdFe300BNt012025105MdfeModalFerroviarioV300Trem } from './CPlMdFe300BNt012025105MdfeModalFerroviarioV300Trem';

import { CPlMdFe300BNt012025105MdfeModalFerroviarioV300Vag } from './CPlMdFe300BNt012025105MdfeModalFerroviarioV300Vag';

/**
 * Informações do modal Ferroviário
 */
export class CPlMdFe300BNt012025105MdfeModalFerroviarioV300Ferrov {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Informações da composição do trem
   */
  public trem?: CPlMdFe300BNt012025105MdfeModalFerroviarioV300Trem;
  /**
   * informações dos Vagões
   */
  public vag?: CPlMdFe300BNt012025105MdfeModalFerroviarioV300Vag;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalFerroviarioV300Ferrov instance.
   * Schema context: Informações do modal Ferroviário
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeModalFerroviarioV300Ferrov,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalFerroviarioV300Ferrov';

    if (props) {
      this.trem = props.trem
        ? new CPlMdFe300BNt012025105MdfeModalFerroviarioV300Trem(props.trem)
        : undefined;
      this.vag = props.vag
        ? new CPlMdFe300BNt012025105MdfeModalFerroviarioV300Vag(props.vag)
        : undefined;
    }
  }
}
