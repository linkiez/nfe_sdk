import { CEventoEpecNfCePl100EventoEpecV001Dest } from '../../classes/Evento_EPEC_NFCe_PL1.00/CEventoEpecNfCePl100EventoEpecV001Dest';

/**
 * Informações de detalhes do evento
 */
export interface IEventoEpecNfCePl100EventoEpecV001DetEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do Órgão do Autor do Evento.
   */
  cOrgaoAutor?: unknown;
  /**
   * Versão do aplicativo do Autor do Evento.
   */
  verAplic?: unknown;
  /**
   * Data e hora no formato UTC (Universal Coordinated Time): "AAAA-MM-DDThh:mm:ss TZD".
   */
  dhEmi?: unknown;
  /**
   * IE do Emitente
   */
  IE?: unknown;
  /**
   * Sigla da UF do destinatário.
   */
  dest?: CEventoEpecNfCePl100EventoEpecV001Dest;
  /**
   * Valor total da NFC-e
   */
  vNF?: unknown;
  /**
   * Valor total do ICMS
   */
  vICMS?: unknown;
}
