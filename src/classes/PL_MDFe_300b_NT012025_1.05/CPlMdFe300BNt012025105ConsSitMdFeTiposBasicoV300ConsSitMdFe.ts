import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
/**
 * Tipo Pedido de Consulta da Situação Atual do MDF-e
 */
export class CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ConsSitMdFe {
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
   * Chaves de acesso do MDF-e, compostas por: UF do emitente, AAMM da emissão do MDF-e, CNPJ do emitente, modelo, série, tipo de emissão e número do MDF-e e código numérico + DV.
   */
  public chMDFe?: unknown;
  /**
   * Schema attribute versao.
   */
  public $versao?: any;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ConsSitMdFe instance.
   * Schema context: Tipo Pedido de Consulta da Situação Atual do MDF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ConsSitMdFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ConsSitMdFe';

    if (props) {
      assignSchemaProperties(this, props, [
        'tpAmb',
        'xServ',
        'chMDFe',
        '$versao',
      ]);
    }
  }
}
