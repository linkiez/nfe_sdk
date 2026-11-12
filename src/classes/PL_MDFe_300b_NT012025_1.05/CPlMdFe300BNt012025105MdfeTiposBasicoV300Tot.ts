import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Totalizadores da carga transportada e seus documentos fiscais
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300Tot {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Valor total da carga / mercadorias transportadas
   */
  public vCarga?: unknown;
  /**
   * Peso Bruto Total da Carga / Mercadorias transportadas
   */
  public qCarga?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300Tot instance.
   * Schema context: Totalizadores da carga transportada e seus documentos fiscais
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Tot) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300Tot';

    if (props) {
      assignSchemaProperties(this, props, ['vCarga', 'qCarga']);
    }
  }
}
