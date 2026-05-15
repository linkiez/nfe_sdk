import { CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento } from '../../classes/Evento_EPEC_NFCe_PL1.00/CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento';

/**
 * Type contract for IEventoEpecNfCePl100RetEventoEpecV001.
 */
export interface IEventoEpecNfCePl100RetEventoEpecV001 {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificador de controle do Lote de envio do Evento, conforme informado na mensagem de entrada.
   */
  retEnvEvento?: CEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento;
}
