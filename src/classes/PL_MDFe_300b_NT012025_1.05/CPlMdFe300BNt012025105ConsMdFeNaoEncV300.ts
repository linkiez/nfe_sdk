import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105ConsMdFeNaoEncV300ConsMdFeNaoEnc } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsMdFeNaoEncV300ConsMdFeNaoEnc';

/**
 * Runtime class for CPlMdFe300BNt012025105ConsMdFeNaoEncV300.
 */
export class CPlMdFe300BNt012025105ConsMdFeNaoEncV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property cons MDFe Nao Enc.
   */
  public consMDFeNaoEnc?: TPlMdFe300BNt012025105ConsMdFeNaoEncV300ConsMdFeNaoEnc;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsMdFeNaoEncV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105ConsMdFeNaoEncV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105ConsMdFeNaoEncV300) {
    this['@class'] = '.CPlMdFe300BNt012025105ConsMdFeNaoEncV300';

    if (props) {
      assignSchemaProperties(this, props, ['consMDFeNaoEnc']);
    }
  }
}
