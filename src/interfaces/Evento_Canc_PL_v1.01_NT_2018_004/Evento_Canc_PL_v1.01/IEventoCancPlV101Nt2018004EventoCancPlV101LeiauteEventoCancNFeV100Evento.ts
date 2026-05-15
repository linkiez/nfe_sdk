import { CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento } from '../../../classes/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento';

import { TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento } from '../../../types/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento';

/**
 * Tipo Evento
 */
export interface IEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento {
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
  infEvento?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento;
}
