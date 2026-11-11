import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga';

/**
 * Informações dos Documentos fiscais vinculados ao manifesto
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Informações dos Municípios de descarregamento
   */
  public infMunDescarga?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc instance.
   * Schema context: Informações dos Documentos fiscais vinculados ao manifesto
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfDoc';

    if (props) {
      this.infMunDescarga = props.infMunDescarga
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMunDescarga(
            props.infMunDescarga,
          )
        : undefined;
    }
  }
}
