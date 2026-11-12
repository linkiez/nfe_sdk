import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidCarga } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidCarga';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300Container } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300Container';

/**
 * Tipo Dados Unidade de Carga
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Tipo da Unidade de Carga 1 - Container; 2 - ULD; 3 - Pallet; 4 - Outros;
   */
  public tpUnidCarga?: unknown;
  /**
   * Identificação da Unidade de Carga Informar a identificação da unidade de carga, por exemplo: número do container.
   */
  public idUnidCarga?: TPlMdFe300BNt012025105MdfeTiposBasicoV300Container;
  /**
   * Lacres das Unidades de Carga
   */
  public lacUnidCarga?: CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidCarga;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga instance.
   * Schema context: Tipo Dados Unidade de Carga
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga';

    if (props) {
      assignSchemaProperties(this, props, ['tpUnidCarga', 'idUnidCarga']);
      this.lacUnidCarga = props.lacUnidCarga
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidCarga(
            props.lacUnidCarga,
          )
        : undefined;
    }
  }
}
