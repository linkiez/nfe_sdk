import { TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat } from '../../types/PL_NFAg_1.00j/TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat';

/**
 * Tipo Pedido de Consulta do Status do Serviço NFAg
 */
export interface IPlNfAg100JConsStatServNfAgTiposBasicoV100ConsStatServ {
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
   * Tipo Versão do Consulta do Status do Serviço NFAg
   */
  $versao?: TPlNfAg100JConsStatServNfAgTiposBasicoV100VerConsStat;
}
