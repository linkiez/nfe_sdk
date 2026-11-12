import { CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidTransp } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidTransp';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300Container } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300Container';

/**
 * Tipo Dados Unidade de Transporte
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300UnidadeTransp {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo da Unidade de Transporte 1 - Rodoviário Tração; 2 - Rodoviário Reboque; 3 - Navio; 4 - Balsa; 5 - Aeronave; 6 - Vagão; 7 - Outros
   */
  tpUnidTransp?: unknown;
  /**
   * Identificação da Unidade de Transporte Informar a identificação conforme o tipo de unidade de transporte. Por exemplo: para rodoviário tração ou reboque deverá preencher com a placa do veículo.
   */
  idUnidTransp?: TPlMdFe300BNt012025105MdfeTiposBasicoV300Container;
  /**
   * Lacres das Unidades de Transporte
   */
  lacUnidTransp?: CPlMdFe300BNt012025105MdfeTiposBasicoV300LacUnidTransp;
  /**
   * Informações das Unidades de Carga (Containeres/ULD/Outros) Dispositivo de carga utilizada (Unit Load Device - ULD) significa todo tipo de contêiner de carga, vagão, contêiner de avião, palete de aeronave com rede ou palete de aeronave com rede sobre um iglu.
   */
  infUnidCarga?: CPlMdFe300BNt012025105MdfeTiposBasicoV300UnidCarga[];
  /**
   * Quantidade rateada (Peso,Volume)
   */
  qtdRat?: unknown;
}
