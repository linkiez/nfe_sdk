import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Informações do modal Aéreo
 */
export class CPlMdFe300BNt012025105MdfeModalAereoV300Aereo {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Data do Voo Formato AAAA-MM-DD
   */
  public dVoo?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeModalAereoV300Aereo instance.
   * Schema context: Informações do modal Aéreo
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeModalAereoV300Aereo) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeModalAereoV300Aereo';

    if (props) {
      assignSchemaProperties(this, props, ['dVoo']);
    }
  }
}
