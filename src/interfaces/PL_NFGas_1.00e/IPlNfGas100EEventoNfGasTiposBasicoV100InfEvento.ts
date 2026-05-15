import { CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento } from '../../classes/PL_NFGas_1.00e/CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IPlNfGas100EEventoNfGasTiposBasicoV100InfEvento {
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
   * Chave de Acesso NFGas vinculada
   */
  chNFGas?: unknown;
  /**
   * Schema property dh Evento.
   */
  dhEvento?: unknown;
  /**
   * Detalhamento do evento específico
   */
  detEvento?: CPlNfGas100EEventoNfGasTiposBasicoV100DetEvento;
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
