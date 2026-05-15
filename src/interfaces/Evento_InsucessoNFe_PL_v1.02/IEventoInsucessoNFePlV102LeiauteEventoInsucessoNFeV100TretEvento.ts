import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export interface IEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento {
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
  infEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEvento;
}
