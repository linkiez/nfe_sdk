import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

/**
 * Tipo Redução Base de Cálculo
 */
export interface IPlNfAg100JDFeTiposBasicosV100Red {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Percentual de redução de aliquota do cClassTrib
   */
  pRedAliq?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Aliquota Efetiva que será aplicada a Base de Calculo (em percentual)
   */
  pAliqEfet?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
}
