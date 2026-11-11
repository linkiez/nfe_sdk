import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * MDF-e processado
 */
export class CPlMdFe300BNt012025105ProcMdFeV300MdfeProc {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Schema property MDFe.
   */
  public MDFe?: unknown;
  /**
   * Schema property prot MDFe.
   */
  public protMDFe?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ProcMdFeV300MdfeProc instance.
   * Schema context: MDF-e processado
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105ProcMdFeV300MdfeProc) {
    this['@class'] = '.CPlMdFe300BNt012025105ProcMdFeV300MdfeProc';

    if (props) {
      assignSchemaProperties(this, props, ['MDFe', 'protMDFe']);
    }
  }
}
