import { TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat } from '../../types/PL_MDFe_300b_NT012025_1.05/TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat';

/**
 * Tipo Pedido de Consulta do Status do Serviço MDFe
 */
export interface IPlMdFe300BNt012025105ConsStatServTiposBasicoV300ConsStatServ {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Serviço Solicitado
   */
  xServ?: unknown;
  /**
   * Tipo Versão do Consulta do Status do Serviço MDFe
   */
  $versao?: TPlMdFe300BNt012025105ConsStatServTiposBasicoV300VerConsStat;
}
