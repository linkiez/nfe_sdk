import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp';

/**
 * Informações da NF-e
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Chave de acesso da NF-e
   */
  public chNFe?: unknown;
  /**
   * Schema property Seg Cod Barra.
   */
  public SegCodBarra?: unknown;
  /**
   * Tipo Dados Unidade de Transporte
   */
  public infUnidTransp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp[];
  /**
   * Preenchido quando for transporte de produtos classificados pela ONU como perigosos.
   */
  public peri?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe instance.
   * Schema context: Informações da NF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfNFe';

    if (props) {
      assignSchemaProperties(this, props, ['chNFe', 'SegCodBarra']);
      this.infUnidTransp = props.infUnidTransp?.map(
        (o) => new CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp(o),
      );
      this.peri = props.peri
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri(props.peri)
        : undefined;
    }
  }
}
