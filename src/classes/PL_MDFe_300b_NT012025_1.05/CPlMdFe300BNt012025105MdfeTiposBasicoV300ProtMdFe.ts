import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfFisco } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfFisco';

import { CPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe';

/**
 * Dados do Recibo do Arquivo
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300ProtMdFe {
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
  public infProt?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt;
  /**
   * Mensagem do Fisco
   */
  public infFisco?: CPlMdFe300BNt012025105MdfeTiposBasicoV300InfFisco;
  /**
   * Tipo Versão do MDF-e - 3.00
   */
  public $versao?: TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300ProtMdFe instance.
   * Schema context: Dados do Recibo do Arquivo
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300ProtMdFe,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300ProtMdFe';

    if (props) {
      assignSchemaProperties(this, props, ['unknown']);
      this.infProt = props.infProt
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfProt(props.infProt)
        : undefined;
      this.infFisco = props.infFisco
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300InfFisco(props.infFisco)
        : undefined;
      assignSchemaProperties(this, props, ['$versao']);
    }
  }
}
