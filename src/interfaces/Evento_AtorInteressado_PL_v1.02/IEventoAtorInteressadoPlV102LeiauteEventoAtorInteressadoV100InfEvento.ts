import { CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento } from '../../classes/Evento_AtorInteressado_PL_v1.02/CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 91 para identificar o Ambiente Nacional
   */
  cOrgao?: unknown;
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
   * Schema XML de validação do evento de Ator Interessado na NF-e - Transportador (110150)”
   */
  detEvento?: CEventoAtorInteressadoPlV102LeiauteEventoAtorInteressadoV100DetEvento;
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
   * Código do Órgão Autor do Evento. Informar o Código da UF para este Evento.
   */
  cOrgaoAutor?: unknown;
  /**
   * Número do protocolo de registro do evento
   */
  nProt?: unknown;
}
