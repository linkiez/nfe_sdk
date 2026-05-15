import { CPlNfGas100ENfgasTiposBasicoV100IcmsTot } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100IcmsTot';

import { CPlNfGas100ENfgasTiposBasicoV100VRetTribTot } from '../../classes/PL_NFGas_1.00e/CPlNfGas100ENfgasTiposBasicoV100VRetTribTot';

/**
 * Dados dos totais da NFGas
 */
export interface IPlNfGas100ENfgasTiposBasicoV100Total {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor Total dos produtos e serviços
   */
  vProd?: unknown;
  /**
   * Totais referentes ao ICMS
   */
  CPlNfGas100ENfgasTiposBasicoV100IcmsTot?: CPlNfGas100ENfgasTiposBasicoV100IcmsTot;
  /**
   * Total da retenção de tributos federais
   */
  vRetTribTot?: CPlNfGas100ENfgasTiposBasicoV100VRetTribTot;
  /**
   * Valor do COFINS
   */
  vCOFINS?: unknown;
  /**
   * Valor do PIS
   */
  vPIS?: unknown;
  /**
   * Valor Taxa Regulatoria
   */
  vTxReg?: unknown;
  /**
   * Valor Total da NFGas
   */
  vNF?: unknown;
  /**
   * Totais de IBS e CBS
   */
  IBSCBSTot?: unknown;
  /**
   * Valor total do documento fiscal (vNF + total do IBS + total da CBS)
   */
  vTotDFe?: unknown;
}
