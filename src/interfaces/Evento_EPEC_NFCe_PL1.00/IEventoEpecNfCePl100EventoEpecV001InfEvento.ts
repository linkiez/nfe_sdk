import { CEventoEpecNfCePl100EventoEpecV001DetEvento } from '../../classes/Evento_EPEC_NFCe_PL1.00/CEventoEpecNfCePl100EventoEpecV001DetEvento';

import { TEventoEpecNfCePl100EventoEpecV001COrgaoIbge } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100EventoEpecV001COrgaoIbge';

import { TEventoEpecNfCePl100EventoEpecV001VerEvento } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100EventoEpecV001VerEvento';

/**
 * Grupo de informações do registro do Evento
 */
export interface IEventoEpecNfCePl100EventoEpecV001InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento.
   */
  cOrgao?: TEventoEpecNfCePl100EventoEpecV001COrgaoIbge;
  /**
   * Identificação do Ambiente: 1=Produção /2=Homologação
   */
  tpAmb?: unknown;
  /**
   * Para o evento de EPEC, a posição 35 da Chave de Acesso deve ser 4 (tpEmis=4).
   */
  chNFe?: unknown;
  /**
   * Data e hora do evento no formato AAAA-MM-DDThh:mm:ssTZD (UTC - Universal Coordinated Time).
   */
  dhEvento?: unknown;
  /**
   * Versão do detalhe do evento (grupo detEvento - P17), informação usada pela SEFAZ para validar o grupo detEvento.
   */
  verEvento?: TEventoEpecNfCePl100EventoEpecV001VerEvento;
  /**
   * Informações de detalhes do evento
   */
  detEvento?: CEventoEpecNfCePl100EventoEpecV001DetEvento;
}
