import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento } from './CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento';

import { TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento';

/**
 * Tipo Evento
 */
export class CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  public unknown?: unknown;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  public infEvento?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento;
  /**
   * Tipo Versão do Evento
   */
  public $versao?: TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento instance.
   * Schema context: Tipo Evento
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento';

    if (props) {
      assignSchemaProperties(this, props, ['unknown']);
      this.infEvento = props.infEvento
        ? new CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento(
            props.infEvento,
          )
        : undefined;
      assignSchemaProperties(this, props, ['$versao']);
    }
  }
}
