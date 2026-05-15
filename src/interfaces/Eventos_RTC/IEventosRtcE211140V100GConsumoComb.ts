import { CEventosRtcE211140V100GControleEstoque } from '../../classes/Eventos_RTC/CEventosRtcE211140V100GControleEstoque';

/**
 * Informações de consumo de combustíveis
 */
export interface IEventosRtcE211140V100GConsumoComb {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do IBS relativo ao consumo de combustível na nota de aquisição
   */
  vIBS?: unknown;
  /**
   * Valor da CBS relativo ao consumo de combustível na nota de aquisição
   */
  vCBS?: unknown;
  /**
   * Informar a quantidade de consumo do item
   */
  gControleEstoque?: CEventosRtcE211140V100GControleEstoque;
}
