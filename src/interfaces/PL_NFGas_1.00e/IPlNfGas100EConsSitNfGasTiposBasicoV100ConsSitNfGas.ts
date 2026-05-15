import { TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas';

/**
 * Tipo Pedido de Consulta da Situação Atual da NFGas
 */
export interface IPlNfGas100EConsSitNfGasTiposBasicoV100ConsSitNfGas {
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
   * Chaves de acesso da NFGas
   */
  chNFGas?: unknown;
  /**
   * Tipo Versão do Consulta situação de NFGas - 1.00
   */
  $versao?: TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas;
}
