import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105LeiauteDistMdFeV300Proc } from './CPlMdFe300BNt012025105LeiauteDistMdFeV300Proc';

import { TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe';

/**
 * Schema XML de validação da área de dados descompactada
 */
export class CPlMdFe300BNt012025105LeiauteDistMdFeV300LoteDistDFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * informação do proc
   */
  public proc?: CPlMdFe300BNt012025105LeiauteDistMdFeV300Proc;
  /**
   * Tipo Versão
   */
  public $versao?: TPlMdFe300BNt012025105LeiauteDistMdFeV300VerDFe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105LeiauteDistMdFeV300LoteDistDFe instance.
   * Schema context: Schema XML de validação da área de dados descompactada
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105LeiauteDistMdFeV300LoteDistDFe,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105LeiauteDistMdFeV300LoteDistDFe';

    if (props) {
      this.proc = props.proc
        ? new CPlMdFe300BNt012025105LeiauteDistMdFeV300Proc(props.proc)
        : undefined;
      assignSchemaProperties(this, props, ['$versao']);
    }
  }
}
