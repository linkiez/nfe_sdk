import { CPlNfAg100JNfagTiposBasicoV100ProtNfAg } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100ProtNfAg';

import { TPlNfAg100JNfagTiposBasicoV100VerNfAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100VerNfAg';

/**
 * Tipo Retorno do Pedido de Autorização de NFAg
 */
export interface IPlNfAg100JNfagTiposBasicoV100RetNfAg {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Identificação da UF
   */
  cUF?: unknown;
  /**
   * Versão do Aplicativo que processou a NFAg
   */
  verAplic?: unknown;
  /**
   * código do status do retorno da consulta.
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do do retorno da consulta.
   */
  xMotivo?: unknown;
  /**
   * Reposta ao processamento da NFAg
   */
  protNFAg?: CPlNfAg100JNfagTiposBasicoV100ProtNfAg;
  /**
   * Tipo Versão da NFAg
   */
  $versao?: TPlNfAg100JNfagTiposBasicoV100VerNfAg;
}
