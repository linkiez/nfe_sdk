import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp';

/**
 * Manifesto Eletrônico de Documentos Fiscais. Somente para modal Aquaviário (vide regras MOC)
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Manifesto Eletrônico de Documentos Fiscais
   */
  public chMDFe?: unknown;
  /**
   * Informações das Unidades de Transporte (Carreta/Reboque/Vagão) Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.
   */
  public infUnidTransp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp[];
  /**
   * Preenchido quando for transporte de produtos classificados pela ONU como perigosos.
   */
  public peri?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp instance.
   * Schema context: Manifesto Eletrônico de Documentos Fiscais. Somente para modal Aquaviário (vide regras MOC)
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfMdFeTransp';

    if (props) {
      assignSchemaProperties(this, props, ['chMDFe']);
      this.infUnidTransp = props.infUnidTransp?.map(
        (o) => new CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp(o),
      );
      this.peri = props.peri
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri(props.peri)
        : undefined;
    }
  }
}
