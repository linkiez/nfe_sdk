import { TPlNfAg100JDFeTiposBasicosV100CnpjBaseRtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100CnpjBaseRtc';

import { TPlNfAg100JDFeTiposBasicosV100CnpjRtc } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100CnpjRtc';

import { TPlNfAg100JDFeTiposBasicosV100MeioPgto } from '../../types/PL_NFAg_1.00j/TPlNfAg100JDFeTiposBasicosV100MeioPgto';

/**
 * Tipo dados do pagamento para o sistema de arrecadação
 */
export interface IPlNfAg100JDFeTiposBasicosV100PagamentoRtc {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * (Meio de pagamento utilizado (ver IT DFe 2026.001)
   */
  tpMeioPgto?: TPlNfAg100JDFeTiposBasicosV100MeioPgto;
  /**
   * CNPJ do recebedor do pagamento Informar zeros não significativos
   */
  CNPJReceb?: TPlNfAg100JDFeTiposBasicosV100CnpjRtc;
  /**
   * CNPJ base da instituição financeira Informar zeros não significativos
   */
  CNPJBasePSP?: TPlNfAg100JDFeTiposBasicosV100CnpjBaseRtc;
  /**
   * Schema attribute n pag.
   */
  $nPag?: any;
  /**
   * Schema attribute id transacao.
   */
  $idTransacao?: any;
}
