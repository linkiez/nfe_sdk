import { CEventosRtcE211140V100GConsumoComb } from '../../classes/Eventos_RTC/CEventosRtcE211140V100GConsumoComb';

/**
 * Informações do Evento de Solicitação de Apropriação de Crédito de Combustível
 */
export interface IEventosRtcE211140V100DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do Órgão Autor do Evento. Informar o Código da UF para este Evento.
   */
  cOrgaoAutor?: unknown;
  /**
   * Versão do Aplicativo que recebeu o Evento
   */
  verAplic?: unknown;
  /**
   * Informações de consumo de combustíveis
   */
  gConsumoComb?: CEventosRtcE211140V100GConsumoComb;
}
