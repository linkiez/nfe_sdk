import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300InfMdFe } from './CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300InfMdFe';

import { TPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300VerConsMdFeNaoEnc } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300VerConsMdFeNaoEnc';

/**
 * Tipo Retorno de Pedido de Consulta MDF-e não Encerrados
 */
export class CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300RetConsMdFeNaoEnc {
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
   * Chaves de acesso do MDF-e não encerrado
   */
  public infMDFe?: CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300InfMdFe;
  /**
   * Tipo Versão do Consulta MDF-e não encerrados - 3.00
   */
  public $versao?: TPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300VerConsMdFeNaoEnc;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300RetConsMdFeNaoEnc instance.
   * Schema context: Tipo Retorno de Pedido de Consulta MDF-e não Encerrados
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300RetConsMdFeNaoEnc,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300RetConsMdFeNaoEnc';

    if (props) {
      assignSchemaProperties(this, props, [
        'tpAmb',
        'verAplic',
        'cStat',
        'xMotivo',
        'cUF',
      ]);
      this.infMDFe = props.infMDFe
        ? new CPlMdFe300BNt012025105ConsMdFeNaoEncTiposBasicoV300InfMdFe(
            props.infMDFe,
          )
        : undefined;
      assignSchemaProperties(this, props, ['$versao']);
    }
  }
}
