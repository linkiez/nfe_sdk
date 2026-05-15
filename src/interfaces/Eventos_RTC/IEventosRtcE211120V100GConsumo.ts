import { CEventosRtcE211120V100DFeReferenciado } from '../../classes/Eventos_RTC/CEventosRtcE211120V100DFeReferenciado';

import { CEventosRtcE211120V100GControleEstoque } from '../../classes/Eventos_RTC/CEventosRtcE211120V100GControleEstoque';

/**
 * Informações por item da NF-e de Aquisição
 */
export interface IEventosRtcE211120V100GConsumo {
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
   * Informar a quantidade para consumo de pessoa física
   */
  gControleEstoque?: CEventosRtcE211120V100GControleEstoque;
  /**
   * Informar a chave da nota (NFe ou NFCe) emitida para o fornecimento nos casos em que a legislação obriga a emissão de documento fiscal.
   */
  CEventosRtcE211120V100DFeReferenciado?: CEventosRtcE211120V100DFeReferenciado;
}
