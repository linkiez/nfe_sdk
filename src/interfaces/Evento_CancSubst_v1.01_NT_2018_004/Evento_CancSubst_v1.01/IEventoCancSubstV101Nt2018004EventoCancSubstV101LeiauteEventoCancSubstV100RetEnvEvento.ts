import { CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento } from '../../../classes/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento';

import { TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento } from '../../../types/Evento_CancSubst_v1.01_NT_2018_004/Evento_CancSubst_v1.01/TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão do Aplicativo que recebeu o Evento
   */
  verAplic?: unknown;
  /**
   * Código do òrgao que registrou o Evento
   */
  cOrgao?: unknown;
  /**
   * Código do status da registro do Evento
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do registro do Evento
   */
  xMotivo?: unknown;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100RetEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoCancSubstV101Nt2018004EventoCancSubstV101LeiauteEventoCancSubstV100VerEnvEvento;
}
