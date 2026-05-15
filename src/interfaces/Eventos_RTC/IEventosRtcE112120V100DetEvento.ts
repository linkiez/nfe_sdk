import { CEventosRtcE112120V100GConsumo } from '../../classes/Eventos_RTC/CEventosRtcE112120V100GConsumo';

/**
 * Informações do Evento de Importação em ALC/ZFM não convertida em isenção
 */
export interface IEventosRtcE112120V100DetEvento {
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
   * Informações de itens integrados ao ativo imobilizado
   */
  gConsumo?: CEventosRtcE112120V100GConsumo;
}
