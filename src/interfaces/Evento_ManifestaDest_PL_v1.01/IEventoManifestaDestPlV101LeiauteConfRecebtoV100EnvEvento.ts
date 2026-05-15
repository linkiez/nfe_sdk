import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoManifestaDestPlV101LeiauteConfRecebtoV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;
}
