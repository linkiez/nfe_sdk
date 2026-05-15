import { CPl010CNt2022002V130LeiauteNFeV400Card } from '../../classes/PL_010c_NT2022_002v1.30/CPl010CNt2022002V130LeiauteNFeV400Card';

/**
 * Grupo de detalhamento da forma de pagamento.
 */
export interface IPl010CNt2022002V130LeiauteNFeV400DetPag {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do Pagamento. Esta tag poderá ser omitida quando a tag tPag=90 (Sem Pagamento), caso contrário deverá ser preenchida.
   */
  vPag?: unknown;
  /**
   * Data do Pagamento
   */
  dPag?: unknown;
  /**
   * Grupo de Cartões, PIX, Boletos e outros Pagamentos Eletrônicos
   */
  card?: CPl010CNt2022002V130LeiauteNFeV400Card;
}
