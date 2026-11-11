import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature';

/**
 * Grupo de Informação do Provedor de Assinatura e Autorização
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * CNPJ do Provedor de Assinatura e Autorização
   */
  public CNPJPAA?: unknown;
  /**
   * Assinatura RSA do Emitente para DFe gerados por PAA
   */
  public CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature?: CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa instance.
   * Schema context: Grupo de Informação do Provedor de Assinatura e Autorização
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfPaa';

    if (props) {
      assignSchemaProperties(this, props, ['CNPJPAA']);
      this.CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature =
        props.CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature
          ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature(
              props.CPlMdFe300BNt012025105MdfeTiposBasicoV300PaaSignature,
            )
          : undefined;
    }
  }
}
