import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat';

/**
 * Tipo Resultado da Consulta do Status do Serviço MDFe
 */
export class CPlMdFe300BNt012025105ConsStatServTiposBasicoV300RetConsStatServ {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Código do status da mensagem enviada.
   */
  public cStat?: unknown;
  /**
   * Descrição literal do status do serviço solicitado.
   */
  public xMotivo?: unknown;
  /**
   * Código da UF responsável pelo serviço
   */
  public cUF?: unknown;
  /**
   * AAAA-MM-DDTHH:MM:SS TZD
   */
  public dhRecbto?: unknown;
  /**
   * AAAA-MM-DDTHH:MM:SS TZD. Deve ser preenchida com data e hora previstas para o retorno dos serviços prestados.
   */
  public dhRetorno?: unknown;
  /**
   * Tipo Versão do Consulta do Status do Serviço MDFe
   */
  public $versao?: TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsStatServTiposBasicoV300RetConsStatServ instance.
   * Schema context: Tipo Resultado da Consulta do Status do Serviço MDFe
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105ConsStatServTiposBasicoV300RetConsStatServ,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105ConsStatServTiposBasicoV300RetConsStatServ';

    if (props) {
      assignSchemaProperties(this, props, [
        'tpAmb',
        'cStat',
        'xMotivo',
        'cUF',
        'dhRecbto',
        'dhRetorno',
        '$versao',
      ]);
    }
  }
}
