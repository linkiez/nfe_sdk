import { CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas';

import { CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas';

import { TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas';

/**
 * Tipo Retorno de Pedido de Consulta da Situação Atual de NFGas
 */
export interface IPlNfGas100EConsSitNfGasTiposBasicoV100RetConsSitNfGas {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que processou o NF-3e
   */
  verAplic?: unknown;
  /**
   * Código do status da mensagem enviada.
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do serviço solicitado.
   */
  xMotivo?: unknown;
  /**
   * código da UF de atendimento
   */
  cUF?: unknown;
  /**
   * Retornar protNF3e da versão correspondente da NFGas autorizada
   */
  protNFGas?: CPlNfGas100EConsSitNfGasTiposBasicoV100ProtNfGas;
  /**
   * Retornar procEventoNFGas da versão correspondente do evento NFGas autorizado
   */
  procEventoNFGas?: CPlNfGas100EConsSitNfGasTiposBasicoV100ProcEventoNfGas;
  /**
   * Tipo Versão do Consulta situação de NFGas - 1.00
   */
  $versao?: TPlNfGas100EConsSitNfGasTiposBasicoV100VerConsSitNfGas;
}
