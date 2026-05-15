import { CPlNfGas100ENfgasTiposBasicoV100ProtNfGas } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100ProtNfGas';

import { TPlNfGas100ENfgasTiposBasicoV100VerNfGas } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100VerNfGas';

/**
 * Tipo Retorno do Pedido de Autorização de NFGas
 */
export interface IPlNfGas100ENfgasTiposBasicoV100RetNfGas {
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
   * Versão do Aplicativo que processou a NFGas
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
   * Reposta ao processamento da NFGas
   */
  protNFGas?: CPlNfGas100ENfgasTiposBasicoV100ProtNfGas;
  /**
   * Tipo Versão da NFGas
   */
  $versao?: TPlNfGas100ENfgasTiposBasicoV100VerNfGas;
}
