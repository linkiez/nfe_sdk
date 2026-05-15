import { CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento } from '../../../classes/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento';

import { CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento } from '../../../classes/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento';

import { TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento } from '../../../types/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEvento;
}
