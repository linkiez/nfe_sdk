import { CPlMdFeDistDFe100RetDistDFeIntV100RetDistDFeInt } from './CPlMdFeDistDFe100RetDistDFeIntV100RetDistDFeInt';

/**
 * Runtime class for CPlMdFeDistDFe100RetDistDFeIntV100.
 */
export class CPlMdFeDistDFe100RetDistDFeIntV100 {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema do resultado do pedido de distribuição de DF-e de interesse
   */
  public retDistDFeInt?: CPlMdFeDistDFe100RetDistDFeIntV100RetDistDFeInt;

  /**
   * Creates a new schema-backed CPlMdFeDistDFe100RetDistDFeIntV100 instance.
   * Schema context: Runtime class for CPlMdFeDistDFe100RetDistDFeIntV100.
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFeDistDFe100RetDistDFeIntV100) {
    this['@class'] = '.CPlMdFeDistDFe100RetDistDFeIntV100';

    if (props) {
      this.retDistDFeInt = props.retDistDFeInt
        ? new CPlMdFeDistDFe100RetDistDFeIntV100RetDistDFeInt(
            props.retDistDFeInt,
          )
        : undefined;
    }
  }
}
