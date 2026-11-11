import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeSupl } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeSupl';

/**
 * Tipo Manifesto de Documentos Fiscais Eletrônicos
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  public unknown?: unknown;
  /**
   * Informações do MDF-e
   */
  public infMDFe?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe;
  /**
   * Informações suplementares do MDF-e
   */
  public infMDFeSupl?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeSupl;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe instance.
   * Schema context: Tipo Manifesto de Documentos Fiscais Eletrônicos
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe';

    if (props) {
      assignSchemaProperties(this, props, ['unknown']);
      this.infMDFe = props.infMDFe
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFe(props.infMDFe)
        : undefined;
      this.infMDFeSupl = props.infMDFeSupl
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeSupl(
            props.infMDFeSupl,
          )
        : undefined;
    }
  }
}
