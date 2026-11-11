import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfEntregaParcial } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfEntregaParcial';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp';

/**
 * Conhecimentos de Tranporte - usar este grupo quando for prestador de serviço de transporte
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Conhecimento Eletrônico - Chave de Acesso
   */
  public chCTe?: unknown;
  /**
   * Segundo código de barras
   */
  public SegCodBarra?: unknown;
  /**
   * Informações das Unidades de Transporte (Carreta/Reboque/Vagão) Deve ser preenchido com as informações das unidades de transporte utilizadas.
   */
  public infUnidTransp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp[];
  /**
   * Preenchido quando for transporte de produtos classificados pela ONU como perigosos.
   */
  public peri?: CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri;
  /**
   * Grupo de informações da Entrega Parcial (Corte de Voo)
   */
  public infEntregaParcial?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfEntregaParcial;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe instance.
   * Schema context: Conhecimentos de Tranporte - usar este grupo quando for prestador de serviço de transporte
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300InfCTe';

    if (props) {
      assignSchemaProperties(this, props, ['chCTe', 'SegCodBarra']);
      this.infUnidTransp = props.infUnidTransp?.map(
        (o) => new CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp(o),
      );
      this.peri = props.peri
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300Peri(props.peri)
        : undefined;
      this.infEntregaParcial = props.infEntregaParcial
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfEntregaParcial(
            props.infEntregaParcial,
          )
        : undefined;
    }
  }
}
