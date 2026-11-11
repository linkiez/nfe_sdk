import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300PaaSignature } from './CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300PaaSignature';

/**
 * Grupo de Informação do Provedor de Assinatura e Autorização
 */
export class CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfPaa {
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
  public CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300PaaSignature?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300PaaSignature;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfPaa instance.
   * Schema context: Grupo de Informação do Provedor de Assinatura e Autorização
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfPaa,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfPaa';

    if (props) {
      assignSchemaProperties(this, props, ['CNPJPAA']);
      this.CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300PaaSignature =
        props.CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300PaaSignature
          ? new CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300PaaSignature(
              props.CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300PaaSignature,
            )
          : undefined;
    }
  }
}
