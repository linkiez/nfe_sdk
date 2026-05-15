import { CPlNfAg100JNfagTiposBasicoV100GMedicao } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100GMedicao';

import { TPlNfAg100JNfagTiposBasicoV100OrigemQtdAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100OrigemQtdAg';

/**
 * Dados do Produto ou Serviço
 */
export interface IPlNfAg100JNfagTiposBasicoV100Prod {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Indicador da origem da quantidade faturada 1 - Media; 2 - Medido; 3 - Contratada; 4 - Calculada ou estimado; 5 - Residual Calculado; 6 - Sem quantidade 7 - Por Faixa;
   */
  indOrigemQtd?: TPlNfAg100JNfagTiposBasicoV100OrigemQtdAg;
  /**
   * Grupo para referenciar qual medição e medida estão relacionadas ao item
   */
  gMedicao?: CPlNfAg100JNfagTiposBasicoV100GMedicao;
  /**
   * Quantidade Faturada Informar a quantidade de comercialização do produto .
   */
  qFaturada?: unknown;
  /**
   * Valor unitário do item O valor unitário do item no caso de energia elétrica corresponde ao valor da tarifa e dos tributos que devam compor a base de cálculo. O item pode estar acrescido do adicional da bandeira tarifária ou o adicional de bandeira poderá ser lançado como um item específico. Este campo também corresponde ao preço médio efetivo relativo ao consumo ativo do período, quando aplicáveis os termos do inciso I da clausula primeira do Convênio ICMS 77/11 (DEVEC).
   */
  vItem?: unknown;
  /**
   * Fator de poluição Se informado multipla ao valor do vItem Obrigatoriamente > 1.
   */
  fatorPoluicao?: unknown;
  /**
   * Valor total do item
   */
  vProd?: unknown;
}
