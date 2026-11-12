import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat';

/**
 * Tipo Pedido de Consulta do Status do Serviço MDFe
 */
export class CPlMdFe300BNt012025105ConsStatServTiposBasicoV300ConsStatServ {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Serviço Solicitado
   */
  public xServ?: unknown;
  /**
   * Tipo Versão do Consulta do Status do Serviço MDFe
   */
  public $versao?: TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsStatServTiposBasicoV300ConsStatServ instance.
   * Schema context: Tipo Pedido de Consulta do Status do Serviço MDFe
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105ConsStatServTiposBasicoV300ConsStatServ,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105ConsStatServTiposBasicoV300ConsStatServ';

    if (props) {
      assignSchemaProperties(this, props, ['tpAmb', 'xServ', '$versao']);
    }
  }
}
