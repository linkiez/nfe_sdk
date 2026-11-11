import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcEventoMdFe } from './CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcEventoMdFe';

import { CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcInfraSa } from './CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcInfraSa';

import { CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProtMdFe } from './CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProtMdFe';

import { TPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300VerConsSitMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300VerConsSitMdFe';

/**
 * Tipo Retorno de Pedido de Consulta da Situação Atual do MDF-e
 */
export class CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300RetConsSitMdFe {
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
   * Código do status da mensagem enviada.
   */
  public cStat?: unknown;
  /**
   * Descrição literal do status do serviço solicitado.
   */
  public xMotivo?: unknown;
  /**
   * código da UF de atendimento
   */
  public cUF?: unknown;
  /**
   * Retornar protMDFe da versão correspondente do MDF-e autorizado
   */
  public protMDFe?: CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProtMdFe;
  /**
   * Retornar procEventoMDFe da versão correspondente do evento MDF-e autorizado
   */
  public procEventoMDFe?: CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcEventoMdFe;
  /**
   * Grupo de informações do compartilhamento do MDFe com InfraSA para geração do DTe
   */
  public procInfraSA?: CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcInfraSa;
  /**
   * Tipo Versão do Consulta situação de MDF-e - 1.00
   */
  public $versao?: TPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300VerConsSitMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300RetConsSitMdFe instance.
   * Schema context: Tipo Retorno de Pedido de Consulta da Situação Atual do MDF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300RetConsSitMdFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300RetConsSitMdFe';

    if (props) {
      assignSchemaProperties(this, props, [
        'tpAmb',
        'verAplic',
        'cStat',
        'xMotivo',
        'cUF',
      ]);
      this.protMDFe = props.protMDFe
        ? new CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProtMdFe(
            props.protMDFe,
          )
        : undefined;
      this.procEventoMDFe = props.procEventoMDFe
        ? new CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcEventoMdFe(
            props.procEventoMDFe,
          )
        : undefined;
      this.procInfraSA = props.procInfraSA
        ? new CPlMdFe300BNt012025105ConsSitMdFeTiposBasicoV300ProcInfraSa(
            props.procInfraSA,
          )
        : undefined;
      assignSchemaProperties(this, props, ['$versao']);
    }
  }
}
