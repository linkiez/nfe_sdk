import { CEventosRtcE211130V100GControleEstoque } from '../../classes/Eventos_RTC/CEventosRtcE211130V100GControleEstoque';

/**
 * Informações de itens integrados ao ativo imobilizado
 */
export interface IEventosRtcE211130V100GImobilizacao {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do IBS relativo à imobilização
   */
  vIBS?: unknown;
  /**
   * Valor da CBS relativo à imobilização
   */
  vCBS?: unknown;
  /**
   * Informar a quantidade do item a ser imobilizado
   */
  gControleEstoque?: CEventosRtcE211130V100GControleEstoque;
}
