import { CPlNfAg100JNfagTiposBasicoV100EndeEmi } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100EndeEmi';

import { CPlNfAg100JNfagTiposBasicoV100Gpix } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100Gpix';

import { TPlNfAg100JNfagTiposBasicoV100Compet } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Compet';

/**
 * Grupo de informações de controle da Fatura Obrigatorio para tpFat 1 e 3 Vedado para tpFat 2
 */
export interface IPlNfAg100JNfagTiposBasicoV100GFat {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Ano e mês referência do faturamento (AAAAMM)
   */
  CompetFat?: TPlNfAg100JNfagTiposBasicoV100Compet;
  /**
   * Data de vencimento da fatura Formato AAAA-MM-DD
   */
  dVencFat?: unknown;
  /**
   * Data de apresentação da fatura Formato AAAA-MM-DD Não obrigatória, conforme item 2.3.2 da Seção 11.1 do Módulo 11 do PRODIST.
   */
  dApresFat?: unknown;
  /**
   * Data prevista próxima leitura Formato AAAA-MM-DD
   */
  dProxLeitura?: unknown;
  /**
   * Endereço de entrega da fatura. Informar se diferente do endereço do destinatário
   */
  enderCorresp?: CPlNfAg100JNfagTiposBasicoV100EndeEmi;
  /**
   * Grupo de informações do PIX
   */
  gPIX?: CPlNfAg100JNfagTiposBasicoV100Gpix;
}
