import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105RetConsMdFeNaoEncV300RetConsMdFeNaoEnc } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105RetConsMdFeNaoEncV300RetConsMdFeNaoEnc';

/**
 * Runtime class for CPlMdFe300BNt012025105RetConsMdFeNaoEncV300.
 */
export class CPlMdFe300BNt012025105RetConsMdFeNaoEncV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property ret Cons MDFe Nao Enc.
   */
  public retConsMDFeNaoEnc?: TPlMdFe300BNt012025105RetConsMdFeNaoEncV300RetConsMdFeNaoEnc;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105RetConsMdFeNaoEncV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105RetConsMdFeNaoEncV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105RetConsMdFeNaoEncV300) {
    this['@class'] = '.CPlMdFe300BNt012025105RetConsMdFeNaoEncV300';

    if (props) {
      assignSchemaProperties(this, props, ['retConsMDFeNaoEnc']);
    }
  }
}
