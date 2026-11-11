import { CPlMdFe300BNt012025105ProcMdFeV300MdfeProc } from './CPlMdFe300BNt012025105ProcMdFeV300MdfeProc';

/**
 * Runtime class for CPlMdFe300BNt012025105ProcMdFeV300.
 */
export class CPlMdFe300BNt012025105ProcMdFeV300 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * MDF-e processado
   */
  public mdfeProc?: CPlMdFe300BNt012025105ProcMdFeV300MdfeProc;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ProcMdFeV300 instance.
   * Schema context: Runtime class for CPlMdFe300BNt012025105ProcMdFeV300.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105ProcMdFeV300) {
    this['@class'] = '.CPlMdFe300BNt012025105ProcMdFeV300';

    if (props) {
      this.mdfeProc = props.mdfeProc
        ? new CPlMdFe300BNt012025105ProcMdFeV300MdfeProc(props.mdfeProc)
        : undefined;
    }
  }
}
