import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento';

import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoManifestaDestPlV101LeiauteConfRecebtoV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento;
}
