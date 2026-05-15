import { CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento } from '../../../classes/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento';

import { TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento } from '../../../types/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;
}
