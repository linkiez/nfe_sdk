import { TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc';

/**
 * Tipo Redução Base de Cálculo
 */
export interface IPlNfGas100EDFeTiposBasicosV100Red {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Percentual de redução de aliquota do cClassTrib
   */
  pRedAliq?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Aliquota Efetiva que será aplicada a Base de Calculo (em percentual)
   */
  pAliqEfet?: TPlNfGas100EDFeTiposBasicosV100Dec030204Rtc;
}
