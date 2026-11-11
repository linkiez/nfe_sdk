import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfLotacao } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfLotacao';

/**
 * Produto predominante
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Informações da carga lotação. Informar somente quando MDF-e for de carga lotação
   */
  public infLotacao?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfLotacao;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred instance.
   * Schema context: Produto predominante
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300ProdPred';

    if (props) {
      this.infLotacao = props.infLotacao
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfLotacao(
            props.infLotacao,
          )
        : undefined;
    }
  }
}
