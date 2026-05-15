import { CPlNfAg100JNfagTiposBasicoV100VRetTribTot } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JNfagTiposBasicoV100VRetTribTot';

/**
 * Dados dos totais da NFAg
 */
export interface IPlNfAg100JNfagTiposBasicoV100Total {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor Total dos produtos e serviços
   */
  vProd?: unknown;
  /**
   * Total da retenção de tributos federais
   */
  vRetTribTot?: CPlNfAg100JNfagTiposBasicoV100VRetTribTot;
  /**
   * Valor do COFINS
   */
  vCOFINS?: unknown;
  /**
   * Valor do PIS
   */
  vPIS?: unknown;
  /**
   * Valor TFS
   */
  vTFS?: unknown;
  /**
   * Valor TFU
   */
  vTFU?: unknown;
  /**
   * Valor Total da NF-e
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
