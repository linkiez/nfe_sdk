import { CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento } from '../../../classes/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento';

import { TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento;
}
