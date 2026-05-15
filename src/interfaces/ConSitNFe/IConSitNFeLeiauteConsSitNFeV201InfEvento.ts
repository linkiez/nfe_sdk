import { CConSitNFeLeiauteConsSitNFeV201DetEvento } from '../../classes/ConSitNFe/CConSitNFeLeiauteConsSitNFeV201DetEvento';

import { TConSitNFeLeiauteConsSitNFeV201COrgaoIbge } from '../../types/ConSitNFe/TConSitNFeLeiauteConsSitNFeV201COrgaoIbge';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IConSitNFeLeiauteConsSitNFeV201InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar o Ambiente Nacional
   */
  cOrgao?: TConSitNFeLeiauteConsSitNFeV201COrgaoIbge;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Chave de Acesso NF-e vinculada
   */
  chNFe?: unknown;
  /**
   * informações específicas do evento
   */
  detEvento?: CConSitNFeLeiauteConsSitNFeV201DetEvento;
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
