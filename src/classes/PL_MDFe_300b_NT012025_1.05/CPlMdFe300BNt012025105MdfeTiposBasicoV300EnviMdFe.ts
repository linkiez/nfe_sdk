import { assignSchemaProperties } from '../../canonical/shared/assign-schema-properties';
import { CPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe } from './CPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300IdLote } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300IdLote';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe';

/**
 * Tipo Pedido de Autorização Assíncrona de MDF-e
 */
export class CPlMdFe300BNt012025105MdfeTiposBasicoV300EnviMdFe {
  /**
   * Runtime class discriminator.
   */
  public '@class'?: string;

  /**
   * Tipo Identificador de controle do envio do lote. Número seqüencial auto-incremental, de controle correspondente ao identificador único do lote enviado. A responsabilidade de gerar e controlar esse número é do próprio contribuinte.
   */
  public idLote?: TPlMdFe300BNt012025105MdfeTiposBasicoV300IdLote;
  /**
   * Tipo Manifesto de Documentos Fiscais Eletrônicos
   */
  public MDFe?: CPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe;
  /**
   * Tipo Versão do MDF-e - 3.00
   */
  public $versao?: TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe;

  /**
   * Creates a new schema-backed CPlMdFe300BNt012025105MdfeTiposBasicoV300EnviMdFe instance.
   * Schema context: Tipo Pedido de Autorização Assíncrona de MDF-e
   * @param props - Initial schema-backed values used to populate the instance.
   */
  public constructor(
    props?: CPlMdFe300BNt012025105MdfeTiposBasicoV300EnviMdFe,
  ) {
    this['@class'] = '.CPlMdFe300BNt012025105MdfeTiposBasicoV300EnviMdFe';

    if (props) {
      assignSchemaProperties(this, props, ['idLote']);
      this.MDFe = props.MDFe
        ? new CPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe(props.MDFe)
        : undefined;
      assignSchemaProperties(this, props, ['$versao']);
    }
  }
}
