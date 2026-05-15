import { TPlNfGas100EDFeTiposBasicosV100CnpjBaseRtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100CnpjBaseRtc';

import { TPlNfGas100EDFeTiposBasicosV100CnpjRtc } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100CnpjRtc';

import { TPlNfGas100EDFeTiposBasicosV100MeioPgto } from '../../types/PL_NFGas_1.00e/TPlNfGas100EDFeTiposBasicosV100MeioPgto';

/**
 * Tipo dados do pagamento para o sistema de arrecadação
 */
export interface IPlNfGas100EDFeTiposBasicosV100PagamentoRtc {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * (Meio de pagamento utilizado (ver IT DFe 2026.001)
   */
  tpMeioPgto?: TPlNfGas100EDFeTiposBasicosV100MeioPgto;
  /**
   * CNPJ do recebedor do pagamento Informar zeros não significativos
   */
  CNPJReceb?: TPlNfGas100EDFeTiposBasicosV100CnpjRtc;
  /**
   * CNPJ base da instituição financeira Informar zeros não significativos
   */
  CNPJBasePSP?: TPlNfGas100EDFeTiposBasicosV100CnpjBaseRtc;
  /**
   * Schema attribute n pag.
   */
  $nPag?: any;
  /**
   * Schema attribute id transacao.
   */
  $idTransacao?: any;
}
