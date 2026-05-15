import { CEventoEpecNfCePl100RetEventoEpecV001RetEvento } from '../../classes/Evento_EPEC_NFCe_PL1.00/CEventoEpecNfCePl100RetEventoEpecV001RetEvento';

import { TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge } from '../../types/Evento_EPEC_NFCe_PL1.00/TEventoEpecNfCePl100RetEventoEpecV001COrgaoIbge';

/**
 * Identificador de controle do Lote de envio do Evento, conforme informado na mensagem de entrada.
 */
export interface IEventoEpecNfCePl100RetEventoEpecV001RetEnvEvento {
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
   * TAG de grupo do resultado do processamento do Evento
   */
  retEvento?: CEventoEpecNfCePl100RetEventoEpecV001RetEvento;
}
