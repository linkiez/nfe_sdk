import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe } from './CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe';

import { TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe';

/**
 * Tipo Retorno de Pedido de Consulta do Manifesto Eletrônico de Documentos Fiscais
 */
export class CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300RetMdFeConsultaDFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou a consulta do MDF-e
   */
  public verAplic?: unknown;
  /**
   * Código do status da consulta do MDF-e
   */
  public cStat?: unknown;
  /**
   * Descrição literal do status da consulta do MDF-e
   */
  public xMotivo?: unknown;
  /**
   * Tipo Documento Fiscal Eletrônico MDF-e
   */
  public MDFeDFe?: CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe;
  /**
   * Tipo Versão do Consulta DFe de MDF-e - 3.00
   */
  public $versao?: TPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300VerMdFeConsultaDFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300RetMdFeConsultaDFe instance.
   * Schema context: Tipo Retorno de Pedido de Consulta do Manifesto Eletrônico de Documentos Fiscais
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300RetMdFeConsultaDFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300RetMdFeConsultaDFe';

    if (props) {
      assignSchemaProperties(this, props, [
        'tpAmb',
        'verAplic',
        'cStat',
        'xMotivo',
      ]);
      this.MDFeDFe = props.MDFeDFe
        ? new CPlMdFe300BNt012025105MdfeConsultaDFeTiposBasicoV300MdFeDFe(
            props.MDFeDFe,
          )
        : undefined;
      assignSchemaProperties(this, props, ['$versao']);
    }
  }
}
