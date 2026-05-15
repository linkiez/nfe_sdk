import { TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Devolução Tributo
 */
export interface IPlNfGas100EDFeTiposBasicosV100DevTrib {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento
   */
  vDevTrib?: TPlNfGas100EDFeTiposBasicosV100Dec1302Rtc;
}
