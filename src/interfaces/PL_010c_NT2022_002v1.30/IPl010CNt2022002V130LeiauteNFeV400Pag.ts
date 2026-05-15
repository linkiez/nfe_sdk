import { CPl010CNt2022002V130LeiauteNFeV400DetPag } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400DetPag';

/**
 * Dados de Pagamento. Obrigatório apenas para (NFC-e) NT 2012/004
 */
export interface IPl010CNt2022002V130LeiauteNFeV400Pag {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Grupo de detalhamento da forma de pagamento.
   */
  detPag?: CPl010CNt2022002V130LeiauteNFeV400DetPag;
  /**
   * Valor do Troco.
   */
  vTroco?: unknown;
}
