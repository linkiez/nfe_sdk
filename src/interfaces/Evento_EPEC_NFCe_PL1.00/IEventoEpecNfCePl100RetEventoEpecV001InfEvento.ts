import { TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge';

/**
 * Grupo de informações do registro do Evento
 */
export interface IEventoEpecNfCePl100RetEventoEpecV001InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Identificação do Ambiente: 1=Produção /2=Homologação
   */
  tpAmb?: unknown;
  /**
   * Versão da aplicação que registrou o Evento, utilizar literal que permita a identificação do órgão, como a sigla da UF ou do órgão.
   */
  verAplic?: unknown;
  /**
   * Código da UF que registrou o Evento.
   */
  cOrgao?: TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge;
  /**
   * Código do status da resposta.
   */
  cStat?: unknown;
  /**
   * Descrição do status da resposta.
   */
  xMotivo?: unknown;
  /**
   * Chave de Acesso da NFC-e vinculada ao evento.
   */
  chNFe?: unknown;
  /**
   * Idem a mensagem de entrada.
   */
  cOrgaoAutor?: unknown;
  /**
   * Data e hora de registro do evento no formato AAAA-MM-DDTHH:MM:SSTZD (formato UTC, onde TZD é +HH:MM ou HH:MM). Se o evento for rejeitado informar a data e hora de recebimento do evento.
   */
  dhRegEvento?: unknown;
  /**
   * Número do Protocolo do Evento
   */
  nProt?: unknown;
  /**
   * Relação de Chaves de Acesso de EPEC pendentes de
   */
  chNFePend?: unknown;
}
