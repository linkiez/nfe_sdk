import { CEventosRtcE211124V100GControleEstoque } from '../../classes/Eventos_RTC/CEventosRtcE211124V100GControleEstoque';

/**
 * Informações por item da Nota de Aquisição
 */
export interface IEventosRtcE211124V100GPerecimento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do IBS na nota de aquisição correspondente à quantidade destinada a uso e consumo pessoal
   */
  vIBS?: unknown;
  /**
   * Valor da CBS na nota de aquisição correspondente à quantidade destinada a uso e consumo pessoal
   */
  vCBS?: unknown;
  /**
   * Informar a quantidade que foi objeto de roubo, perda, furto ou perecimento
   */
  gControleEstoque?: CEventosRtcE211124V100GControleEstoque;
}
