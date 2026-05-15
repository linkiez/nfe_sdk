import { CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg';

import { CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg';

import { TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg';

/**
 * Tipo Retorno de Pedido de Consulta da Situação Atual de NFAg
 */
export interface IPlNfAg100JConsSitNfAgTiposBasicoV100RetConsSitNfAg {
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
   * Retornar protNF3e da versão correspondente da NFAg autorizada
   */
  protNFAg?: CPlNfAg100JConsSitNfAgTiposBasicoV100ProtNfAg;
  /**
   * Retornar procEventoNFAg da versão correspondente do evento NFAg autorizado
   */
  procEventoNFAg?: CPlNfAg100JConsSitNfAgTiposBasicoV100ProcEventoNfAg;
  /**
   * Tipo Versão do Consulta situação de NFAg - 1.00
   */
  $versao?: TPlNfAg100JConsSitNfAgTiposBasicoV100VerConsSitNfAg;
}
