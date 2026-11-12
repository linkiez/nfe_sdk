import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe';

/**
 * Tipo Pedido de Consulta do Recibo do MDF-e
 */
export class CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ConsReciMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public tpAmb?: unknown;
  /**
   * Número do Recibo do arquivo a ser consultado
   */
  public nRec?: unknown;
  /**
   * Tipo Versão do Consulta de MDF-e - 3.00
   */
  public $versao?: TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ConsReciMdFe instance.
   * Schema context: Tipo Pedido de Consulta do Recibo do MDF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ConsReciMdFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ConsReciMdFe';

    if (props) {
      assignSchemaProperties(this, props, ['tpAmb', 'nRec', '$versao']);
    }
  }
}
