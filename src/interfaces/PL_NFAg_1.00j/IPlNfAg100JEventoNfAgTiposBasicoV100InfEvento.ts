import { CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento';

import { CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa } from '../../classes/PL_NFAg_1.00j/CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IPlNfAg100JEventoNfAgTiposBasicoV100InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar SUFRAMA
   */
  cOrgao?: unknown;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Schema property CNPJ.
   */
  CNPJ?: unknown;
  /**
   * Chave de Acesso NFAg vinculada
   */
  chNFAg?: unknown;
  /**
   * Schema property dh Evento.
   */
  dhEvento?: unknown;
  /**
   * Detalhamento do evento específico
   */
  detEvento?: CPlNfAg100JEventoNfAgTiposBasicoV100DetEvento;
  /**
   * Grupo de Informação do Provedor de Assinatura e Autorização
   */
  infPAA?: CPlNfAg100JEventoNfAgTiposBasicoV100InfPaa;
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
   * Data e Hora de do recebimento do evento ou do registro do evento formato AAAA-MM-DDThh:mm:ssTZD
   */
  dhRegEvento?: unknown;
  /**
   * Número do protocolo de registro do evento
   */
  nProt?: unknown;
}
