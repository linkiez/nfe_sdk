import { CEventoEpecNfCePl100RetEventoEpecV001InfEvento } from '../../classes/Evento_EPEC_NFCe_PL1.00/CEventoEpecNfCePl100RetEventoEpecV001InfEvento';

/**
 * TAG de grupo do resultado do processamento do Evento
 */
export interface IEventoEpecNfCePl100RetEventoEpecV001RetEvento {
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
  infEvento?: CEventoEpecNfCePl100RetEventoEpecV001InfEvento;
}
