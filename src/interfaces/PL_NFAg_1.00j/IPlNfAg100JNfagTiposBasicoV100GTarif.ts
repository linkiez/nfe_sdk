import { TPlNfAg100JNfagTiposBasicoV100Faixa } from '../../types/PL_NFAg_1.00j/TPlNfAg100JNfagTiposBasicoV100Faixa';

/**
 * Grupo de Tarifas por Período
 */
export interface IPlNfAg100JNfagTiposBasicoV100GTarif {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Data de início da aplicação da tarifa Data de início da aplicação da tarifa no período considerado para o faturamento ( Formato AAAA-MM-DD)
   */
  dIniTarif?: unknown;
  /**
   * Data de fim da aplicação da tarifa Data de fim da aplicação da tarifa no período considerado para o faturamento (Formato AAAA-MM-DD)
   */
  dFimTarif?: unknown;
  /**
   * Tipo de tarifa de aplicação
   */
  tpFaixaCons?: TPlNfAg100JNfagTiposBasicoV100Faixa;
}
