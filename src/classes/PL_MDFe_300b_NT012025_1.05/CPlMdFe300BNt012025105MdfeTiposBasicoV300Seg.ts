import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfResp } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfResp';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSeg } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSeg';

/**
 * Informações de Seguro da Carga
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300Seg {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Informações do responsável pelo seguro da carga
   */
  public infResp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfResp;
  /**
   * Informações da seguradora
   */
  public infSeg?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSeg;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300Seg instance.
   * Schema context: Informações de Seguro da Carga
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Seg) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300Seg';

    if (props) {
      this.infResp = props.infResp
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfResp(props.infResp)
        : undefined;
      this.infSeg = props.infSeg
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfSeg(props.infSeg)
        : undefined;
    }
  }
}
