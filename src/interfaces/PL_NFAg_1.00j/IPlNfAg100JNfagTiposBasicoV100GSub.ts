import { TPlNfAg100JNfagTiposBasicoV100MotSubAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100MotSubAg';

/**
 * Grupo de informações da substituição
 */
export interface IPlNfAg100JNfagTiposBasicoV100GSub {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Chave de acesso da NFAg referenciada
   */
  chNFAg?: unknown;
  /**
   * Motivo da substituição 01 – Erro de Leitura 02 – Erro de Preço ou Erro de Tarifa; 03 – Decisão Judicial 04 – Erro Cadastral; 05 - Erro de Tributação 06 - Decisão da Reguladora; 07 - Acúmulo de Consumo; 08 - Correção de Vazamento Interno 09 - Alteração de vencimento
   */
  motSub?: TPlNfAg100JNfagTiposBasicoV100MotSubAg;
}
