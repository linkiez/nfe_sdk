import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe } from './CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe';

import { TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe';

/**
 * Tipo Retorno do Pedido de Consulta do Recibo do MDF-e
 */
export class CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300RetConsReciMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou o MDF-e
   */
  public verAplic?: unknown;
  /**
   * Número do Recibo Consultado
   */
  public nRec?: unknown;
  /**
   * código do status do retorno da consulta.
   */
  public cStat?: unknown;
  /**
   * Descrição literal do status do do retorno da consulta.
   */
  public xMotivo?: unknown;
  /**
   * Idntificação da UF
   */
  public cUF?: unknown;
  /**
   * Resultado do processamento do MDF-e
   */
  public protMDFe?: CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe;
  /**
   * Tipo Versão do Consulta de MDF-e - 3.00
   */
  public $versao?: TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300RetConsReciMdFe instance.
   * Schema context: Tipo Retorno do Pedido de Consulta do Recibo do MDF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300RetConsReciMdFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300RetConsReciMdFe';

    if (props) {
      assignSchemaProperties(this, props, [
        'tpAmb',
        'verAplic',
        'nRec',
        'cStat',
        'xMotivo',
        'cUF',
      ]);
      this.protMDFe = props.protMDFe
        ? new CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe(
            props.protMDFe,
          )
        : undefined;
      assignSchemaProperties(this, props, ['$versao']);
    }
  }
}
