import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento';

import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento;
}
