import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento';

import { TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEnvEvento;
}
