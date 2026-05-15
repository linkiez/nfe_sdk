import { CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento } from '../../classes/Evento_InsucessoNFe_PL_v1.02/CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento';

import { TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento } from '../../types/Evento_InsucessoNFe_PL_v1.02/TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100RetEnvEvento {
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
  retEvento?: CEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100TretEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoInsucessoNFePlV102LeiauteEventoInsucessoNFeV100VerEnvEvento;
}
