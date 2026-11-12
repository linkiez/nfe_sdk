import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Grupo de informações do compartilhamento do MDFe com InfraSA para geração do DTe
 */
export class CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcInfraSa {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Número do Protocolo de geração do DTe
   */
  public nProtDTe?: unknown;
  /**
   * Data e hora de geração do protocolo, no formato AAAA-MM-DDTHH:MM:SS TZD.
   */
  public dhProt?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcInfraSa instance.
   * Schema context: Grupo de informações do compartilhamento do MDFe com InfraSA para geração do DTe
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcInfraSa,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcInfraSa';

    if (props) {
      assignSchemaProperties(this, props, ['nProtDTe', 'dhProt']);
    }
  }
}
