import { CEventosRtcE112140V100GControleEstoque } from '../../classes/Eventos_RTC/CEventosRtcE112140V100GControleEstoque';

/**
 * Informações por item da Nota de Fornecimento
 */
export interface IEventosRtcE112140V100GItemNaoFornecido {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do IBS na nota de débito de pagamento antecipado correspondente à quantidade que não foi fornecida
   */
  vIBS?: unknown;
  /**
   * Valor da CBS na nota de débito de pagamento antecipado correspondente à quantidade que não foi fornecida.
   */
  vCBS?: unknown;
  /**
   * Informar a quantidade que não foi fornecida e teve o imposto antecipado
   */
  gControleEstoque?: CEventosRtcE112140V100GControleEstoque;
}
