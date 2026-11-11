import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidTransp } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidTransp';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300Container } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300Container';

/**
 * Tipo Dados Unidade de Transporte
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Tipo da Unidade de Transporte 1 - Rodoviário Tração; 2 - Rodoviário Reboque; 3 - Navio; 4 - Balsa; 5 - Aeronave; 6 - Vagão; 7 - Outros
   */
  public tpUnidTransp?: unknown;
  /**
   * Identificação da Unidade de Transporte Informar a identificação conforme o tipo de unidade de transporte. Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo.
   */
  public idUnidTransp?: TPlMdFe300BNt012025105MdfeTiposBasicoV300Container;
  /**
   * Lacres das Unidades de Transporte
   */
  public lacUnidTransp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidTransp;
  /**
   * Informações das Unidades de Carga (Containeres/ULD/Outros) Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.
   */
  public infUnidCarga?: CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga[];
  /**
   * Quantidade rateada (Peso,Volume)
   */
  public qtdRat?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp instance.
   * Schema context: Tipo Dados Unidade de Transporte
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp';

    if (props) {
      assignSchemaProperties(this, props, ['tpUnidTransp', 'idUnidTransp']);
      this.lacUnidTransp = props.lacUnidTransp
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidTransp(
            props.lacUnidTransp,
          )
        : undefined;
      this.infUnidCarga = props.infUnidCarga?.map(
        (o) => new CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga(o),
      );
      assignSchemaProperties(this, props, ['qtdRat']);
    }
  }
}
