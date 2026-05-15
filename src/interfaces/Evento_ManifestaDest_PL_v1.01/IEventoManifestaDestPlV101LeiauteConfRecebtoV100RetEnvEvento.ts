import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento';

/**
 * Tipo Retorno de Lote de Envio
 */
export interface IEventoManifestaDestPlV101LeiauteConfRecebtoV100RetEnvEvento {
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
  cOrgao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge;
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
  retEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100TretEvento;
  /**
   * Tipo Versão do EnvEvento
   */
  $versao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;
}
