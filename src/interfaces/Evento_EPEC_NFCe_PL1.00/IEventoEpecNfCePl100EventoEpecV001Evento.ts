import { CEventoEpecNfCePl100EventoEpecV001InfEvento } from '../../classes/Evento_EPEC_NFCe_PL1.00/CEventoEpecNfCePl100EventoEpecV001InfEvento';

/**
 * Evento, um lote pode conter até 20 eventos
 */
export interface IEventoEpecNfCePl100EventoEpecV001Evento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Grupo de informações do registro do Evento
   */
  infEvento?: CEventoEpecNfCePl100EventoEpecV001InfEvento;
}
