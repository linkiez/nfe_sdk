import { TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat } from '../../types/PL_NFGas_1.00e/TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat';

/**
 * Tipo Pedido de Consulta do Status do Serviço NFGas
 */
export interface IPlNfGas100EConsStatServNfGasTiposBasicoV100ConsStatServ {
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
   * Tipo Versão do Consulta do Status do Serviço NFGas
   */
  $versao?: TPlNfGas100EConsStatServNfGasTiposBasicoV100VerConsStat;
}
