import { CPlNfGas100ENfgasTiposBasicoV100EndeEmi } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100EndeEmi';

import { CPlNfGas100ENfgasTiposBasicoV100Gpix } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100Gpix';

import { TPlNfGas100ENfgasTiposBasicoV100Compet } from '../../types/PL_NFGas_1.00e/TPlNfGas100ENfgasTiposBasicoV100Compet';

/**
 * Grupo de informações de controle da Fatura Obrigatorio para tpFat 1 e 3 (normal e agregador) Vedado para tpFat 2 (agregado)
 */
export interface IPlNfGas100ENfgasTiposBasicoV100GFat {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Ano e mês referência do faturamento (AAAAMM)
   */
  CompetFat?: TPlNfGas100ENfgasTiposBasicoV100Compet;
  /**
   * Data de vencimento da fatura Formato AAAA-MM-DD
   */
  dVencFat?: unknown;
  /**
   * Data de apresentação da fatura Formato AAAA-MM-DD
   */
  dApresFat?: unknown;
  /**
   * Data prevista próxima leitura Formato AAAA-MM-DD
   */
  dProxLeitura?: unknown;
  /**
   * Endereço de entrega da fatura. Informar se diferente do endereço do destinatário
   */
  enderCorresp?: CPlNfGas100ENfgasTiposBasicoV100EndeEmi;
  /**
   * Grupo de informações do PIX
   */
  gPIX?: CPlNfGas100ENfgasTiposBasicoV100Gpix;
}
