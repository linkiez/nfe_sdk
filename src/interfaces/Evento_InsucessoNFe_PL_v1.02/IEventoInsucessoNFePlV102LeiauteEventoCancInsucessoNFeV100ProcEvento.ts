import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento';

import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento';

/**
 * Tipo procEvento
 */
export interface IEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100ProcEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento;
  /**
   * Tipo retorno do Evento
   */
  retEvento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento;
}
