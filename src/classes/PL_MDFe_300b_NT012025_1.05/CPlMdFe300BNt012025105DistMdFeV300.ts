import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105DistMdFeV300DistMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105DistMdFeV300DistMdFe';

/**
 * Runtime class for CPlMdFe300BNt012025105DistMdFeV300.
 */
export class CPlMdFe300BNt012025105DistMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property dist MDFe.
   */
  public distMDFe?: TPlMdFe300BNt012025105DistMdFeV300DistMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105DistMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105DistMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105DistMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105DistMdFeV300';

    if (props) {
      assignSchemaProperties(this, props, ['distMDFe']);
    }
  }
}
