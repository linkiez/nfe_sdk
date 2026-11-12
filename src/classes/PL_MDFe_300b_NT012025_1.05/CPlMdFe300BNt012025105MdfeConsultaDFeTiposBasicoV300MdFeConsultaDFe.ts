import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe';

/**
 * Tipo Pedido de Consulta do Manifesto Eletrônico de Documentos Fiscais
 */
export class CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeConsultaDFe {
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
   * Chaves de acesso do MDF-e, compostas por: UF do emitente, AAMM da emissão do MDF-e, CNPJ do emitente, modelo, série e número do MDF-e e código numérico + DV.
   */
  public chMDFe?: unknown;
  /**
   * Tipo Versão do Consulta DFe de MDF-e - 3.00
   */
  public $versao?: TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeConsultaDFe instance.
   * Schema context: Tipo Pedido de Consulta do Manifesto Eletrônico de Documentos Fiscais
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeConsultaDFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeConsultaDFe';

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
