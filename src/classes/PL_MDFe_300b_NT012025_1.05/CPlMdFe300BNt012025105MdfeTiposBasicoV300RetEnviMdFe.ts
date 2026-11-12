import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfRec } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfRec';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe';

/**
 * Tipo Retorno do Recibo do Pedido de Autorização do MDF-e
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300RetEnviMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação da UF
   */
  public cUF?: unknown;
  /**
   * Versão do Aplicativo que recebeu o Arquivo.
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
   * Dados do Recibo do Arquivo
   */
  public infRec?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfRec;
  /**
   * Tipo Versão do MDF-e - 3.00
   */
  public $versao?: TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300RetEnviMdFe instance.
   * Schema context: Tipo Retorno do Recibo do Pedido de Autorização do MDF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300RetEnviMdFe,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300RetEnviMdFe';

    if (props) {
      assignSchemaProperties(this, props, [
        'cUF',
        'verAplic',
        'cStat',
        'xMotivo',
      ]);
      this.infRec = props.infRec
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfRec(props.infRec)
        : undefined;
      assignSchemaProperties(this, props, ['$versao']);
    }
  }
}
