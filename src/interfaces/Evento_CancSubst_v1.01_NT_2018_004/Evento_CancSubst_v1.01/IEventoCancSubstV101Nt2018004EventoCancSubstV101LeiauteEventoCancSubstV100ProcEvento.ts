import { CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento } from '../../../classes/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento';

import { CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento } from '../../../classes/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento';

import { TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEvento } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEvento;
}
