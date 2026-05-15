import { CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100InfEvento } from '../../../classes/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100InfEvento';

import { TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEvento } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento {
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
  infEvento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEvento;
}
