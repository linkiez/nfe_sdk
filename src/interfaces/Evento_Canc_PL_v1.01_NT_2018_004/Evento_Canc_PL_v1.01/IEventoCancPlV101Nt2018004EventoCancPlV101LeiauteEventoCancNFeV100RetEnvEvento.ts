import { CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento } from '../../../classes/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento';

import { TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento } from '../../../types/Evento_Canc_PL_v1.01_NT_2018_004/Evento_Canc_PL_v1.01/TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEnvEvento {
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
  retEvento?: CEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100RetEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoCancPlV101Nt2018004EventoCancPlV101LeiauteEventoCancNFeV100VerEnvEvento;
}
