import { TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_010c_NT2022_002v1.30/TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc';

/**
 * Tipo Redução Base de Cálculo
 */
export interface IPl010CNt2022002V130DFeTiposBasicosV100Red {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Percentual de redução de aliquota do cClassTrib
   */
  pRedAliq?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
  /**
   * Aliquota Efetiva que será aplicada a Base de Calculo (em percentual)
   */
  pAliqEfet?: TPl010CNt2022002V130DFeTiposBasicosV100Dec030204Rtc;
}
