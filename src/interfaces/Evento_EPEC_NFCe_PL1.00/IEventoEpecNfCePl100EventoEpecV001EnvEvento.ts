import { CEventoEpecNfCePl100EventoEpecV001Evento } from '../../classes/Evento_EPEC_NFCe_PL1.00/CEventoEpecNfCePl100EventoEpecV001Evento';

/**
 * Identificador de controle do Lote de envio do Evento.
 */
export interface IEventoEpecNfCePl100EventoEpecV001EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Evento, um lote pode conter até 20 eventos
   */
  evento?: CEventoEpecNfCePl100EventoEpecV001Evento;
}
