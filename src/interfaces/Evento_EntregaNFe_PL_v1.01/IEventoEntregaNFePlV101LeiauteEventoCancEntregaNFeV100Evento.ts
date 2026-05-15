import { CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento } from '../../classes/Evento_EntregaNFe_PL_v1.01/CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento';

import { TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento } from '../../types/Evento_EntregaNFe_PL_v1.01/TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento';

/**
 * Tipo Evento
 */
export interface IEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100Evento {
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
  infEvento?: CEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoEntregaNFePlV101LeiauteEventoCancEntregaNFeV100VerEvento;
}
