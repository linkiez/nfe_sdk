import { TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg';

/**
 * Tipo Pedido de Consulta da Situação Atual da NFAg
 */
export interface IPlNfAg100JConsSitNfAgTiposBasicoV100ConsSitNfAg {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção; 2 - Homologação;
   */
  tpAmb?: unknown;
  /**
   * Serviço Solicitado
   */
  xServ?: unknown;
  /**
   * Chaves de acesso da NFAg
   */
  chNFAg?: unknown;
  /**
   * Tipo Versão do Consulta situação de NFAg - 1.00
   */
  $versao?: TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg;
}
