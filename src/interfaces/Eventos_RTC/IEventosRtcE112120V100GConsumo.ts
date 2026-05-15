import { CEventosRtcE112120V100GControleEstoque } from '../../classes/Eventos_RTC/CEventosRtcE112120V100GControleEstoque';

/**
 * Informações de itens integrados ao ativo imobilizado
 */
export interface IEventosRtcE112120V100GConsumo {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Valor do IBS correspondente à quantidade que não atendeu aos requisitos para a conversão em isenção
   */
  vIBS?: unknown;
  /**
   * Valor do CBS correspondente à quantidade que não atendeu aos requisitos para a conversão em isenção
   */
  vCBS?: unknown;
  /**
   * Informar a quantidade que não atendeu os requisitos para a conversão em isenção
   */
  gControleEstoque?: CEventosRtcE112120V100GControleEstoque;
}
