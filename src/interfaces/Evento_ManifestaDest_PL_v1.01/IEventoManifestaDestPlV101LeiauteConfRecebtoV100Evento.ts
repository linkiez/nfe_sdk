import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento';

/**
 * Tipo Evento
 */
export interface IEventoManifestaDestPlV101LeiauteConfRecebtoV100Evento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Referenced or wildcard schema content not fully resolved by the generator.
   */
  unknown?: unknown;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  infEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEvento;
}
