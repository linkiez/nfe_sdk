import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Dados do Recibo do Arquivo
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfRec {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Número do Recibo
   */
  public nRec?: unknown;
  /**
   * Data e hora do recebimento, no formato AAAA-MM-DDTHH:MM:SS
   */
  public dhRecbto?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfRec instance.
   * Schema context: Dados do Recibo do Arquivo
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfRec) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfRec';

    if (props) {
      assignSchemaProperties(this, props, ['nRec', 'dhRecbto']);
    }
  }
}
