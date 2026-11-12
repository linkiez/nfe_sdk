import { CPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300IdLote } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300IdLote';

import { TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe';

/**
 * Tipo Pedido de Autorização Assíncrona de MDF-e
 */
export interface IPlMdFe300BNt012025105MdfeTiposBasicoV300EnviMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Identificador de controle do envio do lote. Número seqüencial auto-incremental, de controle correspondente ao identificador único do lote enviado. A responsabilidade de gerar e controlar esse número é do próprio contribuinte.
   */
  idLote?: TPlMdFe300BNt012025105MdfeTiposBasicoV300IdLote;
  /**
   * Tipo Manifesto de Documentos Fiscais Eletrônicos
   */
  MDFe?: CPlMdFe300BNt012025105MdfeTiposBasicoV300MdFe;
  /**
   * Tipo Versão do MDF-e - 3.00
   */
  $versao?: TPlMdFe300BNt012025105MdfeTiposBasicoV300VerMDe;
}
