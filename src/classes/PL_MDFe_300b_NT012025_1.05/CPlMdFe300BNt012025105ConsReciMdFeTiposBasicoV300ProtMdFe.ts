import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfFisco } from './CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfFisco';

import { CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfProt } from './CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfProt';

import { TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe';

/**
 * Resultado do processamento do MDF-e
 */
export class CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  public unknown?: unknown;
  /**
   * Dados do protocolo de status
   */
  public infProt?: CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfProt;
  /**
   * Mensagem do Fisco
   */
  public infFisco?: CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfFisco;
  /**
   * Tipo Versão do Consulta de MDF-e - 3.00
   */
  public $versao?: TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe instance.
   * Schema context: Resultado do processamento do MDF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ProtMdFe';

    if (props) {
      assignSchemaProperties(this, props, ['unknown']);
      this.infProt = props.infProt
        ? new CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfProt(
            props.infProt,
          )
        : undefined;
      this.infFisco = props.infFisco
        ? new CPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300InfFisco(
            props.infFisco,
          )
        : undefined;
      assignSchemaProperties(this, props, ['$versao']);
    }
  }
}
