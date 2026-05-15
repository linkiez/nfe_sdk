import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento';

/**
 * Tipo Lote de Envio
 */
export interface IEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100EnvEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Tipo Evento
   */
  evento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100Evento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento;
}
