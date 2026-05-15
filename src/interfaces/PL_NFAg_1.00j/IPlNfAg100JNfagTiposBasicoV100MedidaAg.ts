import { TPlNfAg100JNfagTiposBasicoV100UMedItemAg } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100UMedItemAg';

/**
 * Tipo de dados de medida
 */
export interface IPlNfAg100JNfagTiposBasicoV100MedidaAg {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Volume por unidade de consumo em m3
   */
  vUnidConsumo?: unknown;
  /**
   * Unidade Básica de Medida 1 - m3; 2 - Litros; 5 - Unidade 6 - ton
   */
  uMed?: TPlNfAg100JNfagTiposBasicoV100UMedItemAg;
  /**
   * Valor da medição (leitura) anterior
   */
  vMedAnt?: unknown;
  /**
   * Valor da medição (leitura) atual
   */
  vMedAtu?: unknown;
  /**
   * Indicar o fator de multiplicação do medidor
   */
  vConst?: unknown;
  /**
   * Valor da medição (vMedAtu – vMedAnt) * vConst
   */
  vMed?: unknown;
}
