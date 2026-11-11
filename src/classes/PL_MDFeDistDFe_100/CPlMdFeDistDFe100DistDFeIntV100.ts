import { CPlMdFeDistDFe100DistDFeIntV100DistDFeInt } from './CPlMdFeDistDFe100DistDFeIntV100DistDFeInt';

/**
 * Runtime class for CPlMdFeDistDFe100DistDFeIntV100.
 */
export class CPlMdFeDistDFe100DistDFeIntV100 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema de pedido de distribuição de DF-e de interesse
   */
  public distDFeInt?: CPlMdFeDistDFe100DistDFeIntV100DistDFeInt;

  /**
   * Creates a new schema-backed CPlMdFeDistDFe100DistDFeIntV100 instance.
   * Schema context: Runtime class for CPlMdFeDistDFe100DistDFeIntV100.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFeDistDFe100DistDFeIntV100) {
    this['@class'] = '.CPlMdFeDistDFe100DistDFeIntV100';

    if (props) {
      this.distDFeInt = props.distDFeInt
        ? new CPlMdFeDistDFe100DistDFeIntV100DistDFeInt(props.distDFeInt)
        : undefined;
    }
  }
}
