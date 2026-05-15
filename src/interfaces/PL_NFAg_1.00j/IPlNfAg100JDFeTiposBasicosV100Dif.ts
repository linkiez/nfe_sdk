import { TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc';

import { TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc';

/**
 * Tipo Diferimento
 */
export interface IPlNfAg100JDFeTiposBasicosV100Dif {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Percentual do diferimento
   */
  pDif?: TPlNfAg100JDFeTiposBasicosV100Dec030204Rtc;
  /**
   * Valor do diferimento
   */
  vDif?: TPlNfAg100JDFeTiposBasicosV100Dec1302Rtc;
}
