import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento } from './CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento';

import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300RetEvento } from './CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300RetEvento';

import { TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento';

/**
 * Tipo procEvento
 */
export class CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300ProcEvento {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Tipo Evento
   */
  public eventoMDFe?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento;
  /**
   * Tipo retorno do Evento
   */
  public retEventoMDFe?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300RetEvento;
  /**
   * Tipo Versão do Evento
   */
  public $versao?: TPlMdFe300BNt012025105EventoMdFeTiposBasicoV300VerEvento;
  /**
   * Schema attribute ip transmissor.
   */
  public $ipTransmissor?: unknown;
  /**
   * Schema attribute n porta con.
   */
  public $nPortaCon?: any;
  /**
   * Schema attribute dh conexao.
   */
  public $dhConexao?: unknown;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300ProcEvento instance.
   * Schema context: Tipo procEvento
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300ProcEvento,
  ) {
    this['@class'] =
      '.CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300ProcEvento';

    if (props) {
      this.eventoMDFe = props.eventoMDFe
        ? new CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300Evento(
            props.eventoMDFe,
          )
        : undefined;
      this.retEventoMDFe = props.retEventoMDFe
        ? new CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300RetEvento(
            props.retEventoMDFe,
          )
        : undefined;
      assignSchemaProperties(this, props, [
        '$versao',
        '$ipTransmissor',
        '$nPortaCon',
        '$dhConexao',
      ]);
    }
  }
}
