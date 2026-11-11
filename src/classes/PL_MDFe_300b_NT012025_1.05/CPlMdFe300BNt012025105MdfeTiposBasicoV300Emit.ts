import { CPlMdFe300BNt012025105MdfeTiposBasicoV300EndeEmi } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300EndeEmi';

/**
 * Identificação do Emitente do Manifesto
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300Emit {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Endereço do emitente
   */
  public enderEmit?: CPlMdFe300BNt012025105MdfeTiposBasicoV300EndeEmi;

  //choice

  /**
   * CNPJ do emitente Informar zeros não significativos
   * @param arg - Branch value assigned to CNPJ.
   */
  public CNPJ(arg: unknown) {
    delete (this as any).CPF;
    (this as any).CNPJ = arg;
  }

  //choice

  /**
   * CPF do emitente Informar zeros não significativos. Usar com série específica 920-969 para emitente pessoa física com inscrição estadual. Poderá ser usado também para emissão do Regime Especial da Nota Fiscal Fácil
   * @param arg - Branch value assigned to CPF.
   */
  public CPF(arg: unknown) {
    delete (this as any).CNPJ;
    (this as any).CPF = arg;
  }

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300Emit instance.
   * Schema context: Identificação do Emitente do Manifesto
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Emit) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300Emit';

    if (props) {
      this.enderEmit = props.enderEmit
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300EndeEmi(props.enderEmit)
        : undefined;
    }
  }
}
