import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300DetEvento } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300DetEvento';

import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfPaa } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfPaa';

import { CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfSolicNff } from '../../classes/PL_MDFe_300b_NT012025_1.05/CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfSolicNff';

/**
 * Identificação do Ambiente: 1 - Produção 2 - Homologação
 */
export interface IPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfEvento {
  /**
   * Runtime class discriminator.
   */
  "@class"?: string;
  /**
   * Código do órgão de recepção do Evento. Utilizar a Tabela do IBGE extendida, utilizar 90 para identificar SUFRAMA, 91 RFB, 92 BackOffice BRId e 93 ONE
   */
  cOrgao?: unknown;
  /**
   * Identificação do Ambiente: 1 - Produção 2 - Homologação
   */
  tpAmb?: unknown;
  /**
   * Chave de Acesso MDF-e vinculado
   */
  chMDFe?: unknown;
  /**
   * Schema property dh Evento.
   */
  dhEvento?: unknown;
  /**
   * Tipo do Evento vinculado
   */
  tpEvento?: string;
  /**
   * Detalhamento do evento específico
   */
  detEvento?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300DetEvento;
  /**
   * Grupo de informações do pedido de registro de evento da Nota Fiscal Fácil
   */
  infSolicNFF?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfSolicNff;
  /**
   * Grupo de Informação do Provedor de Assinatura e Autorização
   */
  infPAA?: CPlMdFe300BNt012025105EventoMdFeTiposBasicoV300InfPaa;
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
   * Data e Hora de do recebimento do evento ou do registro do evento formato AAAA-MM-DDThh:mm:ss TZD
   */
  dhRegEvento?: unknown;
  /**
   * Número do protocolo de registro do evento
   */
  nProt?: unknown;
}
