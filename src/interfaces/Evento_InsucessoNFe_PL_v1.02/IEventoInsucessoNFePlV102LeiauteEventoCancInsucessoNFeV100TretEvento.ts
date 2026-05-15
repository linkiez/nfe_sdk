import { CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento';

/**
 * Tipo retorno do Evento
 */
export interface IEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100TretEvento {
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
  infEvento?: CEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100InfEvento;
  /**
   * Tipo Versão do Evento
   */
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoCancInsucessoNFeV100VerEvento;
}
