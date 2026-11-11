import { TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe';

/**
 * Tipo Pedido de Consulta do Recibo do MDF-e
 */
export interface IPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300ConsReciMdFe {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Número do Recibo do arquivo a ser consultado
   */
  nRec?: unknown;
  /**
   * Tipo Versão do Consulta de MDF-e - 3.00
   */
  $versao?: TPlMdFe300BNt012025105ConsReciMdFeTiposBasicoV300VerConsReciMdFe;
}
