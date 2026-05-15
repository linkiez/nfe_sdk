import { CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento } from '../../classes/Evento_ManifestaDest_PL_v1.01/CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge';

import { TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento } from '../../types/Evento_ManifestaDest_PL_v1.01/TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IEventoManifestaDestPlV101LeiauteConfRecebtoV100InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 91 para identificar o Ambiente Nacional
   */
  cOrgao?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100COrgaoIbge;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Chave de Acesso NF-e vinculada
   */
  chNFe?: unknown;
  /**
   * Schema property dh Evento.
   */
  dhEvento?: unknown;
  /**
   * Tipo Versão do EnvEvento
   */
  verEvento?: TEventoManifestaDestPlV101LeiauteConfRecebtoV100VerEnvEvento;
  /**
   * Evento da confirmação de recebimento e210200
   */
  detEvento?: CEventoManifestaDestPlV101LeiauteConfRecebtoV100DetEvento;
  /**
   * Versão do Aplicativo que recebeu o Evento
   */
  verAplic?: unknown;
  /**
   * Código do status da registro do Evento
   */
  cStat?: unknown;
  /**
   * Descrição literal do status do registro do Evento
   */
  xMotivo?: unknown;
  /**
   * Número do protocolo de registro do evento
   */
  nProt?: unknown;
}
